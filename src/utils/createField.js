function createField(fieldWidth, fieldHeight) {
    let row = Array.apply(null, Array(fieldWidth)).map(() => 0);
    let field = Array.apply(null, Array(fieldHeight)).map(() => [...row]);

    return field;
}

export default createField;
