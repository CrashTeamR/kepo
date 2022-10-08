export const postQuestion = async (request) => {
  try {
    const response = await fetch(request);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    window.location.href = "/";
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
};
