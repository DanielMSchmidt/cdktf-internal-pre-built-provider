const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  terraformProvider: "google-beta@~> 4.36",
  cdktfVersion: "^0.12.2",
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.17.0",
  jsiiVersion: "^1.53.0",
  namespace: "dschmidt",
  githubNamespace: "danielmschmidt",
  nugetOrg: "DSchmidt",
});

project.synth();
