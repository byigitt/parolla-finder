import finder from "./finder/index.js";

(async () => {
  try {
    await finder.formatDb();
    console.log("[+] database formatted.");

    process.exit(0);
  } catch (e) {
    console.error(e.message);
  }
})();
