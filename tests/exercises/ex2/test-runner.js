const globalTestResults = [];

const describe = (name, tests) => {
  globalTestResults.push({
    name,
    type: "DESCRIBE"
  });
  tests();
};

const test = (name, testFunction) => {
  try {
    testFunction();
    globalTestResults.push({
      name,
      isSuccess: true
    });
  } catch (error) {
    globalTestResults.push({
      name,
      isSuccess: false,
      error
    });
  }
};

const displayResults = parentDomElement => {
  globalTestResults.forEach(result => {
    if (result.type === "DESCRIBE") {
      const header = document.createElement("h3");
      header.appendChild(document.createTextNode(`🗂 Suite: "${result.name}"`));
      parentDomElement.appendChild(header);
      parentDomElement.appendChild(document.createElement("hr"));

      return;
    }

    const resultItem = document.createElement("p");
    resultItem.appendChild(
      document.createTextNode(
        `${result.isSuccess ? "✅" : "❌"}: "${result.name}"`
      )
    );

    parentDomElement.appendChild(resultItem);

    if (!result.isSuccess && result.error) {
      const error = document.createElement("code");
      error.style = 'background-color: bisque; margin-left: 12px;';
      error.appendChild(document.createTextNode(result.error));
      parentDomElement.appendChild(error);
    }
  });
};
