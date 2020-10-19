export default function validateEditProfile(values) {
  let errors = {};

  //Name errors
  if (!values.name) {
    errors.name = "A user name is required";
  }

  //Email errors
  if (!values.email) {
    errors.email = "A email  name is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your email is invalid.";
  }

  //Current password
  if (!values.currentPassword) {
    errors.currentPassword = "Your current password is required.";
  } else if (values.currentPassword.length < 6) {
    errors.currentPassword = "Your password must be at least 6 characters.";
  }

  //New Password
  if (values.newPassword.length < 6) {
    errors.newPassword = "Your password must be at least 6 characters.";
  }

  return errors;
}
