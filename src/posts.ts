export const posts: {
  title: string
  date: string,
  key: string,
  body: string,
}[] = [];

posts.push(
  {
    title: "Minor documentation updates",
    date: "2022-01-25",
    key: "minor-docs-jan2022",
    body: `Minor updates to <a href="https://docs.abaplint.app">abaplint.app Documentation</a>
<br><br>
abaplint.app is continiously updated to use the latest abaplint, since the last update, the following rules have been added,
<ul>
<li>2.84.0, new rule <a href="https://rules.abaplint.org/omit_preceding_zeros/">omit_preceding_zeros</a></li>
<li>2.83.0, new rules <a href="https://rules.abaplint.org/no_aliases/">no_aliases</a> &amp; <a href="https://rules.abaplint.org/prefer_corresponding/">prefer_corresponding</a></li>
<li>2.82.0, new rule <a href="https://rules.abaplint.org/static_call_via_instance/">static_call_via_instance</a></li>
</ul>`,
  },

  {
    title: "Running multiple configurations",
    date: "2021-12-19",
    key: "multiple-configurations",
    body: `By adding a configuration file <tt>abaplint-app.json</tt> in the repository root,
<br>
<pre>
{
  "configurations": {
    "default": {
      "filename": "./abaplint.jsonc"
    },
    "v740sp05": {
      "filename": "./abaplintonprem.jsonc"
    }
  }
}
</pre>
multiple configurations will be analyzed, and reported accordingly,<br>

<img class="shadow p-3 bg-white rounded" src="./multiple_config.svg">`,
  },

  {
    title: "abaplint 2.81.0 published",
    date: "2021-11-22",
    key: "abaplint-281-published",
    body: `Including the following new rules:
<ul>
<li><a href="https://rules.abaplint.org/no_chained_assignment/"><tt>no_chained_assignment</tt></a></li>
<li><a href="https://rules.abaplint.org/unnecessary_chaining/"><tt>unnecessary_chaining</tt></a></li>
</ul>`,
  },

  {
    title: "Updated to abaplint 2.80.0",
    date: "2021-11-03",
    key: "abaplint-280-update",
    body: `abaplint.app is continiously updated to run the latest abaplint.<br>
Today abaplint 2.80.0 was released including a new rule <a href="https://rules.abaplint.org/align_parameters/"><tt>align_parameters</tt></a>`,
  },

  {
    title: "New Observation - Database field changed",
    date: "2021-10-14",
    key: "new-observation-db-field-changed",
    body: `This new observation helps discovering database changes during ABAP code review and impact analysis.<br>
Field types that are changed, added or removed is reported.<br>
This new observation is enabled by default for all repositories using abaplint.app<br>
<br>
<a href="https://github.com/heliconialabs/observation-db_field_changed/pull/2/checks?check_run_id=3891521376"><img class="shadow p-3 bg-white rounded" src="./observation_db_field_changed.svg"></a>`,
  },

  {
    title: "Updated to abaplint 2.77.2",
    date: "2021-08-28",
    key: "abaplint-277-update",
    body: `abaplint.app has been updated to abaplint 2.77.2, note that rule "many_parenthesis" has been renamed to "many_parentheses"`,
  },

  {
    title: "abaplint 2.76 released",
    date: "2021-07-26",
    key: "abaplint-276-released",
    body: `New rule <a href="https://rules.abaplint.org/cyclic_oo/">cyclic_oo</a> published`,
  },

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