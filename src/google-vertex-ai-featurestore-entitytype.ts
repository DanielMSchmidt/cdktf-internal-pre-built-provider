// https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVertexAiFeaturestoreEntitytypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#featurestore GoogleVertexAiFeaturestoreEntitytype#featurestore}
  */
  readonly featurestore: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#id GoogleVertexAiFeaturestoreEntitytype#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to this EntityType.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#labels GoogleVertexAiFeaturestoreEntitytype#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#name GoogleVertexAiFeaturestoreEntitytype#name}
  */
  readonly name?: string;
  /**
  * monitoring_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#monitoring_config GoogleVertexAiFeaturestoreEntitytype#monitoring_config}
  */
  readonly monitoringConfig?: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#timeouts GoogleVertexAiFeaturestoreEntitytype#timeouts}
  */
  readonly timeouts?: GoogleVertexAiFeaturestoreEntitytypeTimeouts;
}
export interface GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis {
  /**
  * The monitoring schedule for snapshot analysis. For EntityType-level config: unset / disabled = true indicates disabled by default for Features under it; otherwise by default enable snapshot analysis monitoring with monitoringInterval for Features under it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#disabled GoogleVertexAiFeaturestoreEntitytype#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Configuration of the snapshot analysis based monitoring pipeline running interval. The value is rolled up to full day.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#monitoring_interval GoogleVertexAiFeaturestoreEntitytype#monitoring_interval}
  */
  readonly monitoringInterval?: string;
}

export function googleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisToTerraform(struct?: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference | GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    monitoring_interval: cdktf.stringToTerraform(struct!.monitoringInterval),
  }
}

export class GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._monitoringInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringInterval = this._monitoringInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._monitoringInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._monitoringInterval = value.monitoringInterval;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // monitoring_interval - computed: false, optional: true, required: false
  private _monitoringInterval?: string; 
  public get monitoringInterval() {
    return this.getStringAttribute('monitoring_interval');
  }
  public set monitoringInterval(value: string) {
    this._monitoringInterval = value;
  }
  public resetMonitoringInterval() {
    this._monitoringInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringIntervalInput() {
    return this._monitoringInterval;
  }
}
export interface GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig {
  /**
  * snapshot_analysis block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#snapshot_analysis GoogleVertexAiFeaturestoreEntitytype#snapshot_analysis}
  */
  readonly snapshotAnalysis?: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis;
}

export function googleVertexAiFeaturestoreEntitytypeMonitoringConfigToTerraform(struct?: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference | GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snapshot_analysis: googleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisToTerraform(struct!.snapshotAnalysis),
  }
}

export class GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotAnalysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotAnalysis = this._snapshotAnalysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._snapshotAnalysis.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._snapshotAnalysis.internalValue = value.snapshotAnalysis;
    }
  }

  // snapshot_analysis - computed: false, optional: true, required: false
  private _snapshotAnalysis = new GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference(this, "snapshot_analysis");
  public get snapshotAnalysis() {
    return this._snapshotAnalysis;
  }
  public putSnapshotAnalysis(value: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis) {
    this._snapshotAnalysis.internalValue = value;
  }
  public resetSnapshotAnalysis() {
    this._snapshotAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotAnalysisInput() {
    return this._snapshotAnalysis.internalValue;
  }
}
export interface GoogleVertexAiFeaturestoreEntitytypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#create GoogleVertexAiFeaturestoreEntitytype#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#delete GoogleVertexAiFeaturestoreEntitytype#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype#update GoogleVertexAiFeaturestoreEntitytype#update}
  */
  readonly update?: string;
}

export function googleVertexAiFeaturestoreEntitytypeTimeoutsToTerraform(struct?: GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference | GoogleVertexAiFeaturestoreEntitytypeTimeouts | cdktf.IResolvable): any {
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

export class GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeaturestoreEntitytypeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiFeaturestoreEntitytypeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype google_vertex_ai_featurestore_entitytype}
*/
export class GoogleVertexAiFeaturestoreEntitytype extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_featurestore_entitytype";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_vertex_ai_featurestore_entitytype google_vertex_ai_featurestore_entitytype} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiFeaturestoreEntitytypeConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiFeaturestoreEntitytypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_featurestore_entitytype',
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
    this._featurestore = config.featurestore;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._monitoringConfig.internalValue = config.monitoringConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // featurestore - computed: false, optional: false, required: true
  private _featurestore?: string; 
  public get featurestore() {
    return this.getStringAttribute('featurestore');
  }
  public set featurestore(value: string) {
    this._featurestore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featurestoreInput() {
    return this._featurestore;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // monitoring_config - computed: false, optional: true, required: false
  private _monitoringConfig = new GoogleVertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference(this, "monitoring_config");
  public get monitoringConfig() {
    return this._monitoringConfig;
  }
  public putMonitoringConfig(value: GoogleVertexAiFeaturestoreEntitytypeMonitoringConfig) {
    this._monitoringConfig.internalValue = value;
  }
  public resetMonitoringConfig() {
    this._monitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigInput() {
    return this._monitoringConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiFeaturestoreEntitytypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiFeaturestoreEntitytypeTimeouts) {
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
      featurestore: cdktf.stringToTerraform(this._featurestore),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      monitoring_config: googleVertexAiFeaturestoreEntitytypeMonitoringConfigToTerraform(this._monitoringConfig.internalValue),
      timeouts: googleVertexAiFeaturestoreEntitytypeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
