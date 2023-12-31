import supabase from "./supabase";

export async function getUsers() {
  let { data, error } = await supabase.from("student_info").select("*");

  if (error) {
    throw new Error("Users cannot be fetched");
  }

  return data;
}

export async function updateCurrentPoints(userId, value) {
  const { data, error } = await supabase
    .from("student_info")
    .update({ points: value })
    .eq("id", userId)
    .select();

  if (error) {
    throw new Error("Users cannot be fetched");
  }

  return data;
}

export async function updateOverAllPoints(userId, value, overallValue) {
  const { data, error } = await supabase
    .from("student_info")
    .update({ points: value, Total_Points: overallValue })

    .eq("id", userId)
    .select();

  if (error) {
    throw new Error("Users cannot be fetched");
  }

  return data;
}

export async function deleteUser(id) {
  const { error } = await supabase.from("student_info").delete().eq("id", id);
  if (error) {
    throw new Error("Users cannot be deleted");
  }
}
