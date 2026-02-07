import { getDoctorById, getAvailableTimeSlots } from "@/actions/appointments";
import { DoctorProfile } from "./_components/doctor-profile";
import { redirect } from "next/navigation";
import { checkUser } from "@/lib/checkUser";

export default async function DoctorProfilePage({ params }) {
  const { id } = await params;

  try {
    // Fetch doctor data and available slots in parallel
    const [doctorData, slotsData, user] = await Promise.all([
      getDoctorById(id),
      getAvailableTimeSlots(id),
      checkUser(),
    ]);

    return (
      <DoctorProfile
        doctor={doctorData.doctor}
        availableDays={slotsData.days || []}
        canBook={user?.role === "PATIENT"}
      />
    );
  } catch (error) {
    console.error("Error loading doctor profile:", error);
    redirect("/doctors");
  }
}
