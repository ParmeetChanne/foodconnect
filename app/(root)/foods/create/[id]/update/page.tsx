import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs"

//We are gonna pass the id of the user interacting with the form
//

const UpdateEvent = () => {
    const { sessionClaims } =  auth()

    //Getting the user id as string (? added incase sessionClaim doesn't exist)
    const userId = sessionClaims?.userId as string

  return (
    <>
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
            <h3 className="wrapper h3-bold sm:text-left text-center">Update Event</h3>
        </section>

        <div className="wrapper my-8">
            <EventForm userId={userId} type="Update" />
        </div>
    </>
  )
}

export default UpdateEvent