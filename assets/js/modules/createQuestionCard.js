const getDiffPublishedTime = (publishedTime) => {
  const now = new Date();

  const diff = now.getTime() - publishedTime.getTime();
  const diffSeconds = Math.floor(diff / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  switch (true) {
    case diffSeconds < 60:
      return `${diffSeconds} ${diffSeconds > 1 ? "seconds" : "second"} ago`;
    case diffMinutes < 60:
      return `${diffMinutes} ${diffMinutes > 1 ? "minutes" : "minute"} ago`;
    case diffHours < 24:
      return `${diffHours} ${diffHours > 1 ? "hours" : "hour"} ago`;
    case diffDays < 30:
      return `${diffDays} ${diffDays > 1 ? "days" : "day"} ago`;
    case diffMonths < 12:
      return `${diffMonths} ${diffMonths > 1 ? "months" : "month"} ago`;
    default:
      return `${diffYears} ${diffYears > 1 ? "years" : "year"} ago`;
  }
};

export const createQuestionCard = ({
  title,
  username,
  comments,
  _id,
  createdAt,
}) => {
  const questionsCardListWrapper =
    document.getElementById("all-questions-list");

  const postedSince = getDiffPublishedTime(new Date(Number(createdAt)));

  const questionCardElement = `
  <div class="bg-kp-gray-100 flex flex-col w-full p-4 gap-12 rounded-lg" id=${_id}>
          <h2 class="text-kp-teal-400 text-lg sm:text-xl font-semibold w-full">
            ${title}
          </h2>

          <div class="flex justify-between items-center">
            <button
              type="button"
              class="text-xs text-white bg-gray-400 hover:bg-gray-500 transition-all ease-in duration-200 sm:px-8 sm:py-2 px-4 py-1 rounded"
            >
              ${comments.length} ${comments.length > 1 ? "answers" : "answer"}
            </button>

            <div class="flex text-kp-teal-400 place-items-center gap-2">
              <h3 class="sm:text-sm text-[10px] font-semibold">${username}</h3>
              <span class="text-normal text-[8px]">${postedSince}</span>
            </div>
          </div>
        </div>
  `;

  questionsCardListWrapper.innerHTML += questionCardElement;
};
