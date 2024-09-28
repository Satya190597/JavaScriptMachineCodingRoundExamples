/**
 * Creates a Promise that resolves after a specified delay.
 */
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  /**
   * Processes the classes (div) in junior school, marking them as "item-passed" or "item-failed" based on the completion status. 
   * @param {string} inCompleteClass - The name of the class that is incomplete.
   * @returns {Promise<void>} A Promise that resolves when all classes have been processed or rejects if an incomplete class is found.
   */
  function studentInJuniorSchool(inCompleteClass) {
    return new Promise(async (resolve, reject) => {
      const juniorSchool = document.querySelectorAll(".junior-school > *");
      for (let juniorSchoolClass of juniorSchool) {
        let className = juniorSchoolClass.innerHTML;
        if (className === inCompleteClass) {
          juniorSchoolClass.setAttribute("class", "item-failed");
          reject(`Unable to complete ${inCompleteClass}.`);
          return;
        }
        juniorSchoolClass.setAttribute("class", "item-passed");
        await delay(1000);
      }
      resolve();
    });
  }
  
  /**
   * Processes the classes (div) in middle school, marking them as "item-passed" or "item-failed" based on the completion status. 
   * @param {string} inCompleteClass - The name of the class that is incomplete.
   * @returns {Promise<void>} A Promise that resolves when all classes have been processed or rejects if an incomplete class is found.
   */
  function studentInMiddleSchool(inCompleteClass) {
    return new Promise(async (resolve, reject) => {
      const juniorSchool = document.querySelectorAll(".middle-school > *");
      for (let juniorSchoolClass of juniorSchool) {
        let className = juniorSchoolClass.innerHTML;
        if (className === inCompleteClass) {
          juniorSchoolClass.setAttribute("class", "item-failed");
          reject(`Unable to complete ${inCompleteClass}.`);
          return;
        }
        juniorSchoolClass.setAttribute("class", "item-passed");
        await delay(1000);
      }
      resolve();
    });
  }
  
  /**
   * Processes the classes (div) in high school, marking them as "item-passed" or "item-failed" based on the completion status. 
   * @param {string} inCompleteClass - The name of the class that is incomplete.
   * @returns {Promise<void>} A Promise that resolves when all classes have been processed or rejects if an incomplete class is found.
   */
  function studentInHightSchool(inCompleteClass) {
    return new Promise(async (resolve, reject) => {
      const juniorSchool = document.querySelectorAll(".high-school > *");
      for (let juniorSchoolClass of juniorSchool) {
        let className = juniorSchoolClass.innerHTML;
        if (className === inCompleteClass) {
          juniorSchoolClass.setAttribute("class", "item-failed");
          reject(`Unable to complete ${inCompleteClass}.`);
          return;
        }
        juniorSchoolClass.setAttribute("class", "item-passed");
        await delay(1000);
      }
      resolve();
    });
  }
  
  function startStudentJourney(inCompleteClass) {
    clearPreviousResult();
    studentInJuniorSchool(inCompleteClass)
      .then(() => studentInMiddleSchool(inCompleteClass))
      .then(() => studentInHightSchool(inCompleteClass))
      .then(() => document.querySelector(".item-result").innerHTML = "Congratulations !! Student Completed High School.")
      .catch((error) => document.querySelector(".item-result").innerHTML = error);
  }
  
  function clearPreviousResult() {
    const juniorSchool = document.querySelectorAll(".junior-school > *");
    for (let juniorSchoolClass of juniorSchool) {
      juniorSchoolClass.setAttribute("class", "item");
    }
    const middleSchool = document.querySelectorAll(".middle-school > *");
    for (let juniorSchoolClass of middleSchool) {
      juniorSchoolClass.setAttribute("class", "item");
    }
    const highSchool = document.querySelectorAll(".high-school > *");
    for (let juniorSchoolClass of highSchool) {
      juniorSchoolClass.setAttribute("class", "item");
    }
    document.querySelector(".item-result").innerHTML = "";
  }
  