const gitHubToken = "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";
const username = "francis-tg";
const url = `https://api.github.com/users/${username}/repos`;
export function fetchRepo() {
	return fetch(url, {
		method: "GET",
		headers: {
			Authorization: `token ${gitHubToken}`,
		},
	});
}
