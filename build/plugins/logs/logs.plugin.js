export const build_logs = {
    name: "build-plugin",
    setup(build) {
        build.onStart(() => {
            console.log("Building...");
        });
        build.onEnd((result) => {
            if (result.errors && Array.isArray(result.errors) && result.errors.length >= 1) {
                console.error(`[${new Date().toLocaleTimeString()}] ❌ Buid failed with errors.`, result.errors);
                return;
            }

            if (result.warnings && Array.isArray(result.warnings) && result.warnings.length >= 1) {
                console.warn(`[${new Date().toLocaleTimeString()}] ⚠️ Build completed with warnings.`, result.warnings);
            } else {
                console.log(`[${new Date().toLocaleTimeString()}] ✅ Build completed.`);
            }
        });
    },
};