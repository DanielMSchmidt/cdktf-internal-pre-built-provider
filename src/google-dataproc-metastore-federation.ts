// https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataprocMetastoreFederationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the metastore federation. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#federation_id GoogleDataprocMetastoreFederation#federation_id}
  */
  readonly federationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the metastore federation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#labels GoogleDataprocMetastoreFederation#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the metastore federation should reside.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#location GoogleDataprocMetastoreFederation#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}
  */
  readonly project?: string;
  /**
  * The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#version GoogleDataprocMetastoreFederation#version}
  */
  readonly version: string;
  /**
  * backend_metastores block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#backend_metastores GoogleDataprocMetastoreFederation#backend_metastores}
  */
  readonly backendMetastores: GoogleDataprocMetastoreFederationBackendMetastores[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#timeouts GoogleDataprocMetastoreFederation#timeouts}
  */
  readonly timeouts?: GoogleDataprocMetastoreFederationTimeouts;
}
export interface GoogleDataprocMetastoreFederationBackendMetastores {
  /**
  * The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#metastore_type GoogleDataprocMetastoreFederation#metastore_type}
  */
  readonly metastoreType: string;
  /**
  * The relative resource name of the metastore that is being federated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#name GoogleDataprocMetastoreFederation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#rank GoogleDataprocMetastoreFederation#rank}
  */
  readonly rank: string;
}

export function googleDataprocMetastoreFederationBackendMetastoresToTerraform(struct?: GoogleDataprocMetastoreFederationBackendMetastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metastore_type: cdktf.stringToTerraform(struct!.metastoreType),
    name: cdktf.stringToTerraform(struct!.name),
    rank: cdktf.stringToTerraform(struct!.rank),
  }
}

export class GoogleDataprocMetastoreFederationBackendMetastoresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataprocMetastoreFederationBackendMetastores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metastoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreType = this._metastoreType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreFederationBackendMetastores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metastoreType = undefined;
      this._name = undefined;
      this._rank = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metastoreType = value.metastoreType;
      this._name = value.name;
      this._rank = value.rank;
    }
  }

  // metastore_type - computed: false, optional: false, required: true
  private _metastoreType?: string; 
  public get metastoreType() {
    return this.getStringAttribute('metastore_type');
  }
  public set metastoreType(value: string) {
    this._metastoreType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreTypeInput() {
    return this._metastoreType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rank - computed: false, optional: false, required: true
  private _rank?: string; 
  public get rank() {
    return this.getStringAttribute('rank');
  }
  public set rank(value: string) {
    this._rank = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }
}

export class GoogleDataprocMetastoreFederationBackendMetastoresList extends cdktf.ComplexList {
  public internalValue? : GoogleDataprocMetastoreFederationBackendMetastores[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataprocMetastoreFederationBackendMetastoresOutputReference {
    return new GoogleDataprocMetastoreFederationBackendMetastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataprocMetastoreFederationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#create GoogleDataprocMetastoreFederation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#delete GoogleDataprocMetastoreFederation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation#update GoogleDataprocMetastoreFederation#update}
  */
  readonly update?: string;
}

export function googleDataprocMetastoreFederationTimeoutsToTerraform(struct?: GoogleDataprocMetastoreFederationTimeoutsOutputReference | GoogleDataprocMetastoreFederationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GoogleDataprocMetastoreFederationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreFederationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreFederationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation google_dataproc_metastore_federation}
*/
export class GoogleDataprocMetastoreFederation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_metastore_federation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_federation google_dataproc_metastore_federation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataprocMetastoreFederationConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataprocMetastoreFederationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_metastore_federation',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._federationId = config.federationId;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._version = config.version;
    this._backendMetastores.internalValue = config.backendMetastores;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_uri - computed: true, optional: false, required: false
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
  }

  // federation_id - computed: false, optional: false, required: true
  private _federationId?: string; 
  public get federationId() {
    return this.getStringAttribute('federation_id');
  }
  public set federationId(value: string) {
    this._federationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get federationIdInput() {
    return this._federationId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // backend_metastores - computed: false, optional: false, required: true
  private _backendMetastores = new GoogleDataprocMetastoreFederationBackendMetastoresList(this, "backend_metastores", true);
  public get backendMetastores() {
    return this._backendMetastores;
  }
  public putBackendMetastores(value: GoogleDataprocMetastoreFederationBackendMetastores[] | cdktf.IResolvable) {
    this._backendMetastores.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendMetastoresInput() {
    return this._backendMetastores.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataprocMetastoreFederationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataprocMetastoreFederationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      federation_id: cdktf.stringToTerraform(this._federationId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      version: cdktf.stringToTerraform(this._version),
      backend_metastores: cdktf.listMapper(googleDataprocMetastoreFederationBackendMetastoresToTerraform, true)(this._backendMetastores.internalValue),
      timeouts: googleDataprocMetastoreFederationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
