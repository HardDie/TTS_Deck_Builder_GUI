<template>
  <div class="bar">
    <span class="path"> TTS Deck Builder </span>
    <ul class="buttons">
      <li>
        <a href="#" class="button">
          <div class="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 12H19"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="button">
          <div class="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 2V8H20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 18V12"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 15H15"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="button">
          <div class="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;

  /* Add space between buttons */
  margin-left: 16px;
}
.path {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #e3ded6;
  font-weight: bold;
}
.buttons {
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;

  /* Buttons should be on the right side of the panel */
  margin-left: auto;

  list-style: none;
}
li {
  align-items: center;
}
.button {
  /* Set the color for the buttons  */
  stroke: #e3ded6;
}
.button:hover {
  stroke: #968c7b;
}
.bar {
  display: flex;
  align-items: center;

  background-color: #169747;
  padding: 16px;

  /* Задаем размеры для шапки */
  width: 100%;
  box-sizing: border-box;
  height: 56px;
}
</style>
