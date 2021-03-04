const SalesModel = require('../../models/sales-model');
const SalesItemsModel = require('../../models/sales-items-model');
const { validationResult } = require('express-validator');

exports.addSales = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const image = req.file;
  let imageURL = '';
  if (image) {
    imageURL = req.file.path;
  } else {
    return res.status(404).json({
      msg: 'No image provided',
    });
  }

  try {
    const {customer_Id, stoneType, quality, weight, rate, paymentMode, paymentDate, salesItems} = req.body;
    const salesData = await SalesModel.create({
      customer_Id,
      stoneType,
      quality,
      weight,
      rate,
      imageURL,
      paymentMode,
      paymentDate,
    });

    for (let i = 0; i < salesItems.length; i++) {
      await SalesItemsModel.create({
        salesId: salesData['dataValues']['id'],
        blockId: salesItems[i]
      });
    }

    res.status(201).json({
      msg: 'Sales added successfully'
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}