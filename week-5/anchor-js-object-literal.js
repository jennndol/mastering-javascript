var studentObj = {
    name: 'Alexandra',
    age: 20,
    dateofBirth: '14 Januari 1997',
    gender: 'FEMALE',
    studentID: '101010',
    hobbies: ['Soccer'],
    setName: function (teks) {
        studentObj.name = teks;
    },
    setAge: function (angka) {
        studentObj.age = angka;
    },
    setDateOfBirth: function (teks) {
        studentObj.dateofBirth = teks;
    },
    setGender: function (teks) {
        if ((teks === 'MALE') || (teks === 'FEMALE')) {
            studentObj.gender = teks;
        }
    },
    removeHobby: function (teks) {
        studentObj.hobbies.splice(studentObj.hobbies.indexOf(teks));
    },
    getData: function () {
        return studentObj;
    }
}

console.log(studentObj);

studentObj.setName('Luthfi');
studentObj.setAge(25);
studentObj.setDateOfBirth('8 Februari 1992');
studentObj.setGender('MALE');
studentObj.removeHobby('Soccer');
console.log(studentObj.getData());