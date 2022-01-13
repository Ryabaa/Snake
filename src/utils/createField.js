function createField(rows, columns) {
    let newField = [];
    let newRow = [];

    for (let column = 0; column < columns; column++) {
        newRow.push(0);
    }

    for (let row = 0; row < rows; row++) {
        newField.push(newRow);
    }

    return newField;
}

export default createField;
