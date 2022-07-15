import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"

export const ApplicationViews = () => {
	
	const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

	if (honeyUserObject.staff) {
		return <EmployeeViews />
	}
	else {
		return <CustomerViews />
	}
}