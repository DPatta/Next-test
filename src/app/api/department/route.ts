export async function GET() {
  try {
    const response = await fetch("https://dummyjson.com/users", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const dataRaw = await response.json();
    const userData = dataRaw.users;
    const result = summayDepartment(userData);
    return Response.json(result);
  } catch (error) {
    throw new Error(`Failed to fetch user data: ${error}`);
  }
}
function summayDepartment(users: { [key: string]: [] }) {
  const summary: any = {};

  Object.values(users).forEach((user: any) => {
    const department = user.company.department;
    const gender = user.gender;
    const age = user.age;
    const hairColor = user.hair.color;

    if (!summary[department]) {
      summary[department] = {
        male: 0,
        female: 0,
        ageRange: `${age}-${age}`,
        hair: {},
        addressUser: {},
      };
    }

    if (gender === "male") {
      summary[department].male++;
    } else {
      summary[department].female++;
    }

    const [minAge, maxAge] = summary[department].ageRange
      .split("-")
      .map(Number);
    summary[department].ageRange = `${Math.min(minAge, age)}-${Math.max(
      maxAge,
      age
    )}`;

    summary[department].hair[hairColor] =
      (summary[department].hair[hairColor] || 0) + 1;

    summary[department].addressUser[`${user.firstName} ${user.lastName}`] =
      user.address.postalCode;
  });

  return summary;
}
