const register_modal = require("../Modal/employee_register");
const jwt = require('jsonwebtoken');

// const employee_details = async (req, res) => {
//     try {
//         const {employee_id, employee_name, employee_email, employee_password, job_title, date_of_join, project_code, project_name, 
//             region, project_manger, employee_id_two, name, designation, experiences,
//             certificates } = req.body;
        
//         const employee_data = new register_modal({employee_id, employee_name, employee_email, employee_password, job_title, date_of_join, project_code, project_name, 
//             region, project_manger, employee_id_two, name, designation, experiences,
//             certificates})

//         const resp = await employee_data.save();

//             res.status(200).send({message: "Hello data is save", employee: resp})
//     } catch (error) {
//         console.log(error);
        
//     }
// }

const employee_details = async (req, res) => {
    try {
        const employeeData = {
            ...req.body,
            status: 'pending' // Add status field
        };

        const employee_data = new register_modal(employeeData);
        const resp = await employee_data.save();

        res.status(200).send({
            message: "Registration request submitted. Awaiting admin approval.",
            employee: resp
        });
    } catch (error) {
        res.status(500).send({ message: "Registration failed", error: error.message });
    }
}

const employeebulkregistration = async (req, res) => {
    try {
        const employees = req.body.employees1

        if (!Array.isArray(employees)) {
        return res.status(400).send({ message: 'Invalid data format. Expected an array of employees.' });
        }

         // Iterate over each employee and save to the database
         const savedEmployees = [];
        for (const employee of employees) {
        const { employee_id, employee_name, employee_email, employee_password, function_title, job_title, date_of_join, project_code, project_name, department, 
            region, project_manger, employee_id_two, name, designation, role } = employee;

        const employee_data = new register_modal({employee_id, employee_name, employee_email, employee_password, function_title, job_title, date_of_join, project_code, project_name, 
            department, region, project_manger, employee_id_two, name, designation, role})

        const savedEmployee = await employee_data.save();  // Save each employee
        savedEmployees.push(savedEmployee);
        }

    res.status(200).send({ message: 'Employees registered successfully', employees: savedEmployees });

    } catch (error) {
        console.error('Error occurred during registration:', error);
        res.status(500).send({ message: 'An error occurred while saving employee data', error });
    }
}

const remove_data_two = async (req, res) => {
    try {
       const _id = req.params._id;
       const resp = await register_modal.findByIdAndDelete(_id);
        res.status(200).send({message2: "data deleted success", employee: resp});
    } catch (error) {
        console.log(error);
        
    }
}

const get_data_employee = async (req, res) => {
    try {
        const resp = await register_modal.find();
        res.status(200).send({message3: "data get sucessfuly", employee: resp});
    } catch (error) {
        console.log(error);
    }
}

const get_data_employee2 = async (req, res) => {
    try {
        // Get specific employee data using ID
        const employeeId = req.params.id;
        const resp = await register_modal.findById(employeeId);
        
        if (!resp) {
            return res.status(404).send({ message: "Employee not found" });
        }
        
        res.status(200).send({
            message: "Data fetched successfully", 
            employee: resp
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server error" });
    }
};

const update_data_employee = async (req, res) => {
    try {
        const _id = req.params._id;
        const updatedData = req.body;
        
        const resp = await register_modal.findByIdAndUpdate(
            _id, 
            updatedData,
            { new: true } // Returns the updated document
        );
        
        if (!resp) {
            return res.status(404).send({ message: "Employee not found" });
        }
        
        res.status(200).send({
            message: "Data updated successfully", 
            employee: resp
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server error" });
    }
};

// const employee_login = async (req, res) => {
//     try {
//         const { email_id, password } = req.body;
//         const user = await register_modal.findOne({ employee_email: email_id });
        
//         if (!user) {
//             return res.status(404).send({ message: "email id not registered" });
//         }
        
//         if (user.employee_password === password) {
//             // Return all necessary employee data
//             const employeeData = {
//                 _id: user._id,
//                 employee_id: user.employee_id,
//                 employee_name: user.employee_name,
//                 employee_email: user.employee_email,
//                 job_title: user.job_title,
//                 date_of_join: user.date_of_join,
//                 project_code: user.project_code,
//                 project_name: user.project_name,
//                 region: user.region,
//                 project_manger: user.project_manger,
//                 designation: user.designation,

//                 job_experience_title: user.job_experience_title,
//                 employment_type: user.employment_type,
//                 company_name: user.company_name,
//                 start_date: user.start_date,
//                 end_date: user.end_date,
//                 total_experience: user.total_experience,

//                 certificate_title: user.certificate_title,
//                 date_of_certification: user.date_of_certification,
//                 validate_till: user.validate_till,
//                 // Add any additional fields you want to send to frontend
//             };
            
//             res.status(200).send({ 
//                 message: "login success", 
//                 employee: employeeData 
//             });
//         } else {
//             res.status(400).send("password not match");
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: "Server error" });
//     }
// };

// const employee_login = async (req, res) => {
//     try {
//         const { email_id, password } = req.body;
//         const user = await register_modal.findOne({ employee_email: email_id });
        
//         if (!user) {
//             return res.status(404).send({ message: "Email ID not registered" });
//         }
        
//         // Check if user is approved
//         if (user.status !== 'approved') {
//             return res.status(403).send({ 
//                 message: "Your registration is pending approval. Please wait for admin confirmation." 
//             });
//         }
        
//         if (user.employee_password === password) {
//             const employeeData = {
//                 _id: user._id,
//                 employee_id: user.employee_id,
//                 employee_name: user.employee_name,
//                 employee_email: user.employee_email,
//                 job_title: user.job_title,
//                 // ... other fields
//                 date_of_join: user.date_of_join,
//                 project_code: user.project_code,
//                 project_name: user.project_name,
//                 region: user.region,
//                 project_manger: user.project_manger,
//                 designation: user.designation,

//                 job_experience_title: user.job_experience_title,
//                 employment_type: user.employment_type,
//                 company_name: user.company_name,
//                 start_date: user.start_date,
//                 end_date: user.end_date,
//                 total_experience: user.total_experience,

//                 certificate_title: user.certificate_title,
//                 date_of_certification: user.date_of_certification,
//                 validate_till: user.validate_till,
//             };
//             console.log("Sending response:", {
//                 token: generatedToken,
//                 employee: employeeData
//               });
            
//             res.status(200).send({ 
//                 token: generatedToken,  // Make sure this is included
//                 message: "Login success", 
//                 employee: employeeData 
//             });
//         } else {
//             res.status(400).send({ message: "Password does not match" });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: "Server error" });
//     }
// };

const employee_login = async (req, res) => {
    try {
        const { email_id, password } = req.body;
        const user = await register_modal.findOne({ employee_email: email_id });
        
        if (!user) {
            return res.status(404).send({ message: "Email ID not registered" });
        }
        
        // Check if user is approved
        if (user.status !== 'approved') {
            return res.status(403).send({ 
                message: "Your registration is pending approval. Please wait for admin confirmation." 
            });
        }
        
        if (user.employee_password === password) {
            // Generate JWT token
            const generatedToken = jwt.sign(
                {
                    userId: user._id,
                    email: user.employee_email,
                    employeeId: user.employee_id
                },
                process.env.JWT_SECRET || 'your-secret-key',  // Use environment variable for security
                { expiresIn: '24h' }  // Token expires in 24 hours
            );

            const employeeData = {
                _id: user._id,
                employee_id: user.employee_id,
                employee_name: user.employee_name,
                employee_email: user.employee_email,
                function: user.function,
                job_title: user.job_title,
                date_of_join: user.date_of_join,
                project_code: user.project_code,
                project_name: user.project_name,
                department: user.department,
                region: user.region,
                project_manger: user.project_manger,
                designation: user.designation,
                role: user.role,
                job_experience_title: user.job_experience_title,
                employment_type: user.employment_type,
                company_name: user.company_name,
                start_date: user.start_date,
                end_date: user.end_date,
                total_experience: user.total_experience,
                certificate_title: user.certificate_title,
                date_of_certification: user.date_of_certification,
                validate_till: user.validate_till,
            };
            
            console.log("Sending response:", {
                token: generatedToken,
                employee: employeeData
            });
            
            res.status(200).send({ 
                token: generatedToken,
                message: "Login success", 
                employee: employeeData 
            });
        } else {
            res.status(400).send({ message: "Password does not match" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server error" });
    }
};

module.exports = {employee_details, remove_data_two, get_data_employee, get_data_employee2, update_data_employee, employeebulkregistration, employee_login};