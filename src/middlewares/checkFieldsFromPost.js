class FieldsNewProductCheck {

  static checkFieldsPostNewProduct(req, res, next) {
    const newProductFields = req.body;

    // check if body is empty
    if (Object.keys(newProductFields).length === 0) {
      return res.status(400).json({ message: 'No fields were sent' });
    }

    const fieldsRequiredSctructure1 = ['name', 'brand', 'model', 'price', 'color'];

    const fieldsRequiredSctructure2 = ['name', 'details', 'price'];

    const fieldsRequiredSctructure3 = ['name', 'brand', 'model', 'data'];

    if (newProductFields instanceof Array) {
      for (const product of newProductFields) {
        const isStructure3 = Object.keys(product).every((field) => fieldsRequiredSctructure3.includes(field));

        if (!isStructure3) {
          return res.status(400).json({ message: 'Invalid structure' });
        }
      }
      return next();
    }

    if (Object.keys(newProductFields).includes("details")) {
      const isStructure2 = Object.keys(newProductFields).every((field) => fieldsRequiredSctructure2.includes(field));

      if (isStructure2) {
        return next();
      }

      return res.status(400).json({ message: 'Invalid structure' });
    }

    // check if all fields are present
    if (Object.keys(newProductFields).length !== fieldsRequired.length) {
      return res.status(400).json({ message: 'All fields must be sent' });
    }

    const newProductFieldsValues = Object.values(newProductFields);

    const isSomeFieldEmpty = newProductFieldsValues.some((field) => field === null || field === '' || field === undefined);

    if (isSomeFieldEmpty) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    return next();
  }
}

module.exports = FieldsNewProductCheck;
