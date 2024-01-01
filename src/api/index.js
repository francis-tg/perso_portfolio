const gitHubToken = process.env.GIT_TOKEN || null;
const username = "francis-tg";
const url = `https://api.github.com/users/${username}/repos`;
console.log(process.env);
export function fetchRepo() {
	return fetch(url, {
		method: "GET",
		headers: {
			Authorization: `token ${gitHubToken}`,
		},
	});
}
