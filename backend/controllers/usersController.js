import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

///////////// update

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const isAdmin = req.user.role === "admin";
    const isSelf = req.user.id.toString() === userId;

    const updates = { ...req.body };

    // alllow fields based on role
    const adminFields = ["status", "role"];
    const userFields = ["name", "email", "password", "contact", "address"];

    const allowedFields = isAdmin
      ?  adminFields 
      : isSelf
        ? userFields
        : [];

    if (!isAdmin && !isSelf) {
      return res.status(403).json({ success: false, message: "Unauthorized access" });
    }

    const filteredUpdates = {};
    for (let key of allowedFields) {
      if (updates[key]) filteredUpdates[key] = updates[key];
    }

    console.log("Filtered updates being applied:", filteredUpdates);


    const user = await User.findByIdAndUpdate(userId, filteredUpdates, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      message: "User updated successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

////////////// delete

export const deleteUser = async (req,res)=>{
try {
   const userId = req.params.id;
    const isAdmin = req.user.role === "admin";
    const isSelf = req.user.id.toString() === userId;

  if (!isAdmin && !isSelf) {
      return res.status(403).json({ success: false, message: "Unauthorized access" });
    }

    await User.findByIdAndDelete(userId);

    res.json({
      success: true,
      message: "User deleted successfully",
    });

} catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });

}
}


// export const updateUserStatus = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const { status } = req.body;

//     // Validate input
//     if (!["active", "blocked"].includes(status)) {
//       return res.status(400).json({ success: false, message: "Invalid status value" });
//     }

//     // Find and update user
//     const user = await User.findByIdAndUpdate(
//       userId,
//       { status },
//       { new: true, runValidators: true }
//     ).select("-password");

//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     res.json({
//       success: true,
//       message: `User status updated to ${status}`,
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error", error: error.message });
//   }
// };
