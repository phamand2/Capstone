exports.getStaffMemberData = (req, res, next) => {
    res.status(200).json({
        success: true, 
        data: "You have access to the data on staff-member-protected routes"
    })
}