try {
    let result = riskyFunction();
} catch (error) {
    console.error("Error occurred:", error.message);
} finally {
    console.log("This will always run.");
}

function riskyFunction() {
    throw new Error("Something went wrong!");
}