import angularcrud from '../Model/student'
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

//Add Student-------------------------------------------
export const studentAdd = async (req, res) => {
    try {
        const studentadd = new angularcrud({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });
        const savedstudent = await studentadd.save();
        res.send({status: true,code:200,message: "Student Added Successfully",result: savedstudent});
    } catch (e) {
        res.send({ status: false,code:404, messgae: "No Results Found", Result: e });
    }
};
//Student List-------------------------------------------------------
export const studentList = async (req, res) => {
    try {
        const Data = await angularcrud.find();
        res.send({ status: true,code:200, message: "Student List", result: Data })
    }
    catch (e) {
        res.send({ status: false,code:400, messgae: "No Results Found", Result: e });
    }
}
//Delete Student --------------------------------------------------
export const studentDelete = async (req, res) => {
    try {
        var id = req.params.id;
        const result = await angularcrud.deleteOne({ _id: mongoose.Types.ObjectId(id) })
        if (result) {
            res.send({ status: true,code:200, message: "Student Deleted", result: result })
        }
        else {
            res.send({ status: false,code:400, message: "something went wrong" })
        }
    } catch (e) {
        return res.send({ status: false, message: "error", result: e })
    }
}
//Update Student --------------------------------------------------
export const studentUpdate = async (req, res) => {
    try {
        let jsondata = {}
        if (req.body.firstname) {
            jsondata.firstname = req.body.firstname
        }
        if (req.body.lastname) {    
            jsondata.lastname = req.body.lastname
        }
        if (req.body.email) {
            jsondata.email = req.body.email
        }
        angularcrud.updateOne({ _id: req.params.id },
            { $set: jsondata },
            { new: true },
            (err, result) => {
                if (err) {
                    res.send({ status: false,code:400, message: "failed", result: err })
                } else {
                    res.send({ status: true,code:200, message: "Update successfully", result: result })
                }
            }
        )
    } catch (e) {
        return res.send({ status: false, message: "error", code: 400, result: e })
    }

}
//Student Data By Id----------------------------------------------
export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const userdata = await angularcrud.findById({ _id: id })
        if (userdata) {
            res.send({ status: true, message: "Success", result: userdata });
        }
    }
    catch (e) {
        res.send({ status: false, messgae: "No Results Found", Result: e });
    }
};
