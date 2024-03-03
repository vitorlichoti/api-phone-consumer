class FieldsNewProductCheck {

  static checkFieldsPostNewProduct(req, res, next) {
    const newProductFields = req.body;

    // check if body is empty
    if (Object.keys(newProductFields).length === 0) {
      return res.status(400).json({ message: 'No fields were sent' });
    }

    const fieldsRequired = ['name', 'brand', 'model', 'price', 'color'];

    // check if all fields are present
    if (Object.keys(newProductFields).length !== fieldsRequired.length) {
      return res.status(400).json({ message: 'All fields must be sent' });
    }

    const newProductFieldsValues = Object.values(newProductFields);

    const isSomeFieldEmpty = newProductFieldsValues.some((field) => field === null || field === '' || field === undefined);

    if (isSomeFieldEmpty) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    next();
  }
}

module.exports = FieldsNewProductCheck;
