export const posts: {
  title: string
  date: string,
  key: string,
  body: string,
}[] = [];

posts.push(
  {
    title: "abaplint 2.75 released",
    date: "2021-07-16",
    key: "abaplint-275-released",
    body: `abaplint 2.75.0 has been released with a new rule <a href="https://rules.abaplint.org/unused_ddic/">unused_ddic</a>, this rule can help finding artifacts which are not referenced statically.`,
  },

  {
    title: "Observations, zero output",
    date: "2021-05-22",
    key: "observations-zero-output",
    body: `A new feature "Observations" is in development, it will output a check run to each pull request, but not report any error status.`,
  },

  {
    title: "Updates, Week 20",
    date: "2021-05-19",
    key: "updates-week-20",
    body: `abaplint.app will now give an error "No ABAP artifacts found" if no ABAP files are found.
<br><br>
abaplint.app has been updated to run the latest abaplint, which have had numerous updates containing bugfixes.<br>
The version can be found in the check run log.`,
  },

  {
  title: "abaplint.app available on GitHub Marketplace",
  date: "2021-04-20",
  key: "abaplint-available-on-github-marketplace",
  body: `<a href="https://abaplint.app">abaplint.app</a> is now available on <a href="https://github.com/marketplace/abaplint">GitHub Marketplace</a>

  Setup #ABAP static analysis and continious integration in just a few clicks, with:

  <ul>
  <li>Large ruleset</li>
  <li>Pull request integration</li>
  <li>Extra code insights</li>
  </ul>

  Many more features in the pipeline :)`,
});