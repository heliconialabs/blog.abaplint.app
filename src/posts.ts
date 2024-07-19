export const posts: {
  title: string
  date: string,
  key: string,
  body: string,
}[] = [];

posts.push(
  {
    title: "abaplint updated to 2.112.0",
    date: "2024-07-19",
    key: "abaplint-21120",
    body: `abaplint has been updated to 2.112.0, which will provide more precise syntax errors, and have less cascading errors`,
  },

  {
    title: "Disabled annotations links",
    date: "2024-05-25",
    key: "disabled-annotations-links",
    body: `Disabled annotation issues now links to the source code`,
  },

  {
    title: "Procedural vs OO stats",
    date: "2023-12-01",
    key: "procedural-vs-oo-stats",
    body: `Procedural vs OO stats added, <a href="https://abaplint.app/stats/abapGit/abapGit/procedural_vs_oo">Example</a>`,
  },

  {
    title: "Parallel file changes",
    date: "2023-11-12",
    key: "parallel-file-changes",
    body: `Parallel changes to identical filenames across active pull requests are now reported as observations`,
  },

  {
    title: "Object types statistics",
    date: "2023-11-08",
    key: "object-types-statistics",
    body: `Object type statistics added,<br>
    <a href="https://abaplint.app/stats/abapGit/abapGit/object_types"><img class="shadow p-3 bg-white rounded" src="./objecttypes.png"></a>`,
  },

  {
    title: "Void types sorting",
    date: "2023-10-22",
    key: "sort-void-types",
    body: `Clicking the headers in the void types table will now sort the table, click again to change direction, <a href="https://abaplint.app/stats/abapGit/abapGit/void_types">try it out</a>`,
  },

  {
    title: "Intra class call graph",
    date: "2023-10-19",
    key: "intra-class-call-graph",
    body: `Display call graph between methods internally in a class,<br>
<a href="https://abaplint.app/stats/abapGit/abapGit/intra_class_call_graph?name=ZCL_ABAPGIT_FOLDER_LOGIC"><img class="shadow p-3 bg-white rounded" src="./call_graph.svg"></a>`,
  },

  {
    title: "Introducing Target Rules",
    date: "2023-10-01",
    key: "introducing-target-rules",
    body: `Keep the code moving forward, see <a href="https://docs.abaplint.app">documentation</a> for details`,
  },

  {
    title: "More and better suggestions",
    date: "2023-07-16",
    key: "more-suggest-07-10",
    body: `More quick fixes will now trigger suggestions in the pull requests, plus bugfixes`,
  },

  {
    title: "Average complexity & method length",
    date: "2023-07-10",
    key: "averages-07-10",
    body: `Average cyclomatic complexity & average method length added as new insights`,
  },

  {
    title: "More historical stats",
    date: "2023-07-09",
    key: "lines-vs-tests",
    body: `Number of unit tests over time, plus a new graph comparing lines and unit tests over time has been added.<br>
<a href="https://abaplint.app/stats/sbcgua/ajson/lines_vs_tests"><img class="shadow p-3 bg-white rounded" src="./lines_vs_tests.png" height="300"></a>`,
  },

  {
    title: "Lines over time",
    date: "2023-04-27",
    key: "lines-over-time",
    body: `Lines over time statistics added,<br>
<a href="https://abaplint.app/stats/oblomov-dev/abap2UI5/lines_over_time"><img class="shadow p-3 bg-white rounded" src="./lines_over_time.png" height="300"></a>`,
  },

  {
    title: "Updated to abaplint 2.98.0",
    date: "2023-04-27",
    key: "abaplint-298-update",
    body: `abaplint.app has been updated to 2.98.0, this includes new rule <a href="https://rules.abaplint.org/select_single_full_key/">select_single_full_key</a>`,
  },

  {
    title: "Updated to abaplint 2.97.0",
    date: "2023-04-04",
    key: "abaplint-297-update",
    body: `abaplint.app has been updated to 2.97.0, this includes new rules <a href="https://rules.abaplint.org/strict_sql/">strict_sql</a> and <a href="https://rules.abaplint.org/fully_type_itabs/">fully_type_itabs</a>.`,
  },

  {
    title: "Method complexity statistics",
    date: "2023-03-12",
    key: "method-complexity-statistics",
    body: `Method cyclomatic complexity has been added as a new statistics page.`,
  },

  {
    title: "Cloud compatibility",
    date: "2023-03-08",
    key: "cloud-compatibility-void",
    body: `The void type statistics now includes release, depcrecation and successor information,
<br>
<img class="shadow p-3 bg-white rounded" src="./cloud_compatibility.png">`,
  },

  {
    title: "Package coupling changes",
    date: "2023-02-03",
    key: "copuling-subfolder-blue",
    body: `Package coupling diagrams with dependencies into subfolders will now display as blue.`,
  },

  {
    title: "UML diagram footers added",
    date: "2023-01-17",
    key: "uml-diagram-footers",
    body: `UML diagrams will now include a footer with the SHA1 plus timestamp when it was generated.`,
  },

  {
    title: "New package diagrams",
    date: "2023-01-07",
    key: "new-package-diagrams",
    body: `Package coupling diagrams are now generated as SVGs,
    <br>
<img class="shadow p-3 bg-white rounded" src="./package_coupling.svg">`,
  },

  {
    title: "New configuration option noArtifactsOkay",
    date: "2022-12-14",
    key: "noartifactsokay",
    body: `New confiugration option "noArtifactsOkay" abaplint-app.jsonc, which allows skipping the error for no ABAP artifacts found`,
  },

  {
    title: "Updated to abaplint 2.94.1",
    date: "2022-11-30",
    key: "abaplint-294-update",
    body: `abaplint.app has been updated to 2.94.1, this includes new rule <a href="https://rules.abaplint.org/unnecessary_return/">unnecessary_return</a> and more quick fixes.`,
  },

  {
    title: "UML diagram max size increased",
    date: "2022-09-24",
    key: "maxsize220924",
    body: `Large UML diagrams have previosly been skipped, now an error is shown, plus the max size has been doubled.`,
  },

  {
    title: "Updated to abaplint 2.93.0",
    date: "2022-08-29",
    key: "abaplint-293-update",
    body: `New,
<ul>
<li>rule <a href="https://rules.abaplint.org/cds_comment_style/">cds_comment_style</a></li>
<li>rule <a href="https://rules.abaplint.org/change_if_to_case/">change_if_to_case</a></li>
</ul>`,
  },

  {
    title: "Updated to abaplint 2.92.1",
    date: "2022-08-28",
    key: "abaplint-292-update",
    body: `Some skip settings have been changed, check <a href="https://github.com/abaplint/abaplint/pull/2658">release notes</a>`,
  },

  {
    title: "Disabled rules, updates",
    date: "2022-08-17",
    key: "disabled_rules_updates",
    body: `The disabled rules statistics will now indicate if the rules are disabled or undefined in the configuration.<br>
<br>
If the rule is undefined, the code enabling the rule can be copied to clipboard,<br>
<img class="shadow p-3 bg-white rounded" src="./disabled_rules_copy.gif">
`,
  },

  {
    title: "Updated to abaplint 2.91.0",
    date: "2022-06-05",
    key: "abaplint-291-update",
    body: `New,
<ul>
<li>rule <a href="https://rules.abaplint.org/superfluous_value/">superfluous_value</a></li>
<li>rule <a href="https://rules.abaplint.org/cds_legacy_view/">cds_legacy_view</a></li>
</ul>`,
  },

  {
    title: "Updated to abaplint 2.89.0",
    date: "2022-04-19",
    key: "abaplint-289-update",
    body: `Note the following new and renamed rules,
<ul>
<li>new rule <a href="https://rules.abaplint.org/slow_parameter_passing/">slow_parameter_passing</a></li>
<li>new rule <a href="https://rules.abaplint.org/classic_exceptions_overlap/">classic_exceptions_overlap</a></li>
<li>new rule <a href="https://rules.abaplint.org/no_inline_in_optional_branches/">no_inline_in_optional_branches</a></li>
<li>renamed rule pragma_placment -> <a href="https://rules.abaplint.org/pragma_style/">pragma_style</a> and extended</li>
<li>renamed rule check_no_handler_pragma -> <a href="https://rules.abaplint.org/unnecessary_pragma/">unnecessary_pragma</a> and extended</li>
<li>renamed rule local_testclass_location -> <a href="https://rules.abaplint.org/local_testclass_consistency/">local_testclass_consistency</a> and extended</li>
</ul>`,
  },

  {
    title: "sci.abaplint.app deprecated",
    date: "2022-04-15",
    key: "sci-abaplint-app-deprecated",
    body: `The sci.abaplint.app endpoint is now considered deprecated, and service has been terminated.
<br><br>
Docker image <a href="https://hub.docker.com/r/abaplint/abaplint-backend">https://hub.docker.com/r/abaplint/abaplint-backend</a> is still maintained, but must be run on own infrastructure.`,
  },

  {
    title: "Database migration completed",
    date: "2022-03-23",
    key: "database-migration-completed",
    body: `abaplint.app now runs on a different database platform, no expected impact to users.
<br>
Job numbers will start at 1, the old database managed to complete 207425 jobs.
<br>
In case of any questions or bugs please email <a href="mailto:support@abaplint.app">support@abaplint.app</a>`,
  },

  {
    title: "Cross repository syntax check before merge",
    date: "2022-02-19",
    key: "new-cross-check-feature",
    body: `Based on the repsitory relations, abaplint.app will now trigger cross repository syntax checks for all pushes to pull requests.
The feature is immediately available for both public and private repositories.
For additional information refer to the <a href="https://docs.abaplint.app">documentation</a>.<br>
<img class="shadow p-3 bg-white rounded" src="./cross_check.svg">`,
  },

  {
    title: "More hardware, faster results",
    date: "2022-02-18",
    key: "more-hardware-faster-results",
    body: `The hardware running abaplint.app has been updated, customers should experience faster check runs.`,
  },

  {
    title: "Database key field changes reported as observations",
    date: "2022-02-17",
    key: "db-key-field-changes-observations",
    body: `Adding or removing key fields for transparent database tables are now reported as observations.`,
  },

  {
    title: "Listing repository relations",
    date: "2022-02-10",
    key: "list-repo-relations",
    body: `All repositories will now have their dependencies listed, example:<br>
    <a href="https://abaplint.app/stats/abapedia/object-existence/repo_relations"><img class="shadow p-3 bg-white rounded" src="./repo_relations.png"></a>`,
  },

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