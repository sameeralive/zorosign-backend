
let studentList = [];

const getAllStudents = (req, res) => {
    res.status(200).json(studentList);
};

const createStudent = (req, res) => {
    try {
        const {studentName, studentAge, address} = req.body;

        if (!studentName || typeof studentAge !== 'number' || !address) {
            return res.status(400).json({error: 'Invalid input data'});
        }

        const student = {
            studentName,
            studentAge,
            address,
        };

        studentList.push(student);
        res.status(200).json({message: 'Student data received and stored successfully'});
    } catch (error) {
        res.status(500).json(error.message)
    }
};

module.exports = { getAllStudents, createStudent}