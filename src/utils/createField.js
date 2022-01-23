function createField(fieldWidth, fieldHeight) {
    let newField = [];
    let newRow = [];

    for (let column = 0; column < fieldWidth; column++) {
        newRow.push(0);
    }

    for (let row = 0; row < fieldHeight; row++) {
        newField.push(newRow);
    }

    return newField;
}

export default createField;
