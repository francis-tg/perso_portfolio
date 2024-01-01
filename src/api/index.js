const gitHubToken =
	process.env.GIT_TOKEN || "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";
const username = "francis-tg";
const url = `https://api.github.com/`;
console.log(process.env);
export function fetchRepo() {
	return fetch(`${url}users/${username}/repos`, {
		method: "GET",
		headers: {
			Authorization: `token ${gitHubToken}`,
		},
	});
}
export function fetchUser() {
	return fetch(`${url}users/${username}`, {
		method: "GET",
		headers: {
			Authorization: `token ${gitHubToken}`,
		},
	});
}
