import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const profileSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  dob: Yup.date().required("Date of birth is required"),
  city: Yup.string().required("City is required"),
  address: Yup.string().required("Address is required"),
  image: Yup.mixed().required("Profile image is required"),
});

export default function ProfileSetUp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          One last step before you start banking with us... 🚀
        </h1>

        <Formik
          initialValues={{ dob: "", city: "", address: "", image: null }}
          validationSchema={profileSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const formData = new FormData();
              formData.append("name", values.name);
              formData.append("dob", values.dob);
              formData.append("city", values.city);
              formData.append("address", values.address);
              formData.append("image", values.image);

              await axios.post(
                "http://localhost:5000/auth/register",
                formData,
                {
                  headers: { "Content-Type": "multipart/form-data" },
                },
              );

              toast.success("Profile completed successfully!");
              navigate("/dashboard");
            } catch (err) {
              toast.error("Failed to save profile. Try again.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="space-y-4">
              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium">UserName</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="What do we call you?"
                  className="w-full border rounded px-3 py-2 mt-1"
                ></Field>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Date of Birth
                </label>
                <Field
                  type="date"
                  name="dob"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

            <div>

            </div>


              {/* City */}
              <div>
                <label className="block text-sm font-medium">City</label>
                <Field
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium">Address</label>
                <Field
                  as="textarea"
                  name="address"
                  placeholder="Enter your address"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium">
                  Profile Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    setFieldValue("image", event.currentTarget.files[0])
                  }
                  className="w-full border rounded px-3 py-2 mt-1"
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Finish Setup
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
