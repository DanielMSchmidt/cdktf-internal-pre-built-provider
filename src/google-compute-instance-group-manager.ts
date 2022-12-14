// https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeInstanceGroupManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#base_instance_name GoogleComputeInstanceGroupManager#base_instance_name}
  */
  readonly baseInstanceName: string;
  /**
  * An optional textual description of the instance group manager.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#description GoogleComputeInstanceGroupManager#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#project GoogleComputeInstanceGroupManager#project}
  */
  readonly project?: string;
  /**
  * The full URL of all target pools to which new instances in the group are added. Updating the target pools attribute does not affect existing instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#target_pools GoogleComputeInstanceGroupManager#target_pools}
  */
  readonly targetPools?: string[];
  /**
  * The target number of running instances for this managed instance group. This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}
  */
  readonly targetSize?: number;
  /**
  * Whether to wait for all instances to be created/updated before returning. Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#wait_for_instances GoogleComputeInstanceGroupManager#wait_for_instances}
  */
  readonly waitForInstances?: boolean | cdktf.IResolvable;
  /**
  * When used with wait_for_instances specifies the status to wait for. When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#wait_for_instances_status GoogleComputeInstanceGroupManager#wait_for_instances_status}
  */
  readonly waitForInstancesStatus?: string;
  /**
  * The zone that instances in this group should be created in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#zone GoogleComputeInstanceGroupManager#zone}
  */
  readonly zone?: string;
  /**
  * all_instances_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#all_instances_config GoogleComputeInstanceGroupManager#all_instances_config}
  */
  readonly allInstancesConfig?: GoogleComputeInstanceGroupManagerAllInstancesConfig;
  /**
  * auto_healing_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#auto_healing_policies GoogleComputeInstanceGroupManager#auto_healing_policies}
  */
  readonly autoHealingPolicies?: GoogleComputeInstanceGroupManagerAutoHealingPolicies;
  /**
  * named_port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#named_port GoogleComputeInstanceGroupManager#named_port}
  */
  readonly namedPort?: GoogleComputeInstanceGroupManagerNamedPort[] | cdktf.IResolvable;
  /**
  * stateful_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#stateful_disk GoogleComputeInstanceGroupManager#stateful_disk}
  */
  readonly statefulDisk?: GoogleComputeInstanceGroupManagerStatefulDisk[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#timeouts GoogleComputeInstanceGroupManager#timeouts}
  */
  readonly timeouts?: GoogleComputeInstanceGroupManagerTimeouts;
  /**
  * update_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#update_policy GoogleComputeInstanceGroupManager#update_policy}
  */
  readonly updatePolicy?: GoogleComputeInstanceGroupManagerUpdatePolicy;
  /**
  * version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#version GoogleComputeInstanceGroupManager#version}
  */
  readonly version: GoogleComputeInstanceGroupManagerVersion[] | cdktf.IResolvable;
}
export interface GoogleComputeInstanceGroupManagerStatusAllInstancesConfig {
}

export function googleComputeInstanceGroupManagerStatusAllInstancesConfigToTerraform(struct?: GoogleComputeInstanceGroupManagerStatusAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeInstanceGroupManagerStatusAllInstancesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerStatusAllInstancesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective - computed: true, optional: false, required: false
  public get effective() {
    return this.getBooleanAttribute('effective');
  }
}

export class GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference {
    return new GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs {
}

export function googleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsToTerraform(struct?: GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_effective - computed: true, optional: false, required: false
  public get allEffective() {
    return this.getBooleanAttribute('all_effective');
  }
}

export class GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference {
    return new GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceGroupManagerStatusStateful {
}

export function googleComputeInstanceGroupManagerStatusStatefulToTerraform(struct?: GoogleComputeInstanceGroupManagerStatusStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleComputeInstanceGroupManagerStatusStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeInstanceGroupManagerStatusStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerStatusStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_stateful_config - computed: true, optional: false, required: false
  public get hasStatefulConfig() {
    return this.getBooleanAttribute('has_stateful_config');
  }

  // per_instance_configs - computed: true, optional: false, required: false
  private _perInstanceConfigs = new GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList(this, "per_instance_configs", false);
  public get perInstanceConfigs() {
    return this._perInstanceConfigs;
  }
}

export class GoogleComputeInstanceGroupManagerStatusStatefulList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeInstanceGroupManagerStatusStatefulOutputReference {
    return new GoogleComputeInstanceGroupManagerStatusStatefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceGroupManagerStatusVersionTarget {
}

export function googleComputeInstanceGroupManagerStatusVersionTargetToTerraform(struct?: GoogleComputeInstanceGroupManagerStatusVersionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeInstanceGroupManagerStatusVersionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerStatusVersionTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_reached - computed: true, optional: false, required: false
  public get isReached() {
    return this.getBooleanAttribute('is_reached');
  }
}

export class GoogleComputeInstanceGroupManagerStatusVersionTargetList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference {
    return new GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceGroupManagerStatus {
}

export function googleComputeInstanceGroupManagerStatusToTerraform(struct?: GoogleComputeInstanceGroupManagerStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleComputeInstanceGroupManagerStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeInstanceGroupManagerStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_instances_config - computed: true, optional: false, required: false
  private _allInstancesConfig = new GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList(this, "all_instances_config", false);
  public get allInstancesConfig() {
    return this._allInstancesConfig;
  }

  // is_stable - computed: true, optional: false, required: false
  public get isStable() {
    return this.getBooleanAttribute('is_stable');
  }

  // stateful - computed: true, optional: false, required: false
  private _stateful = new GoogleComputeInstanceGroupManagerStatusStatefulList(this, "stateful", false);
  public get stateful() {
    return this._stateful;
  }

  // version_target - computed: true, optional: false, required: false
  private _versionTarget = new GoogleComputeInstanceGroupManagerStatusVersionTargetList(this, "version_target", false);
  public get versionTarget() {
    return this._versionTarget;
  }
}

export class GoogleComputeInstanceGroupManagerStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeInstanceGroupManagerStatusOutputReference {
    return new GoogleComputeInstanceGroupManagerStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceGroupManagerAllInstancesConfig {
  /**
  * The label key-value pairs that you want to patch onto the instance,
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#labels GoogleComputeInstanceGroupManager#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The metadata key-value pairs that you want to patch onto the instance. For more information, see Project and instance metadata,
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#metadata GoogleComputeInstanceGroupManager#metadata}
  */
  readonly metadata?: { [key: string]: string };
}

export function googleComputeInstanceGroupManagerAllInstancesConfigToTerraform(struct?: GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference | GoogleComputeInstanceGroupManagerAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
  }
}

export class GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceGroupManagerAllInstancesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerAllInstancesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._metadata = value.metadata;
    }
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface GoogleComputeInstanceGroupManagerAutoHealingPolicies {
  /**
  * The health check resource that signals autohealing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#health_check GoogleComputeInstanceGroupManager#health_check}
  */
  readonly healthCheck: string;
  /**
  * The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}
  */
  readonly initialDelaySec: number;
}

export function googleComputeInstanceGroupManagerAutoHealingPoliciesToTerraform(struct?: GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference | GoogleComputeInstanceGroupManagerAutoHealingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    initial_delay_sec: cdktf.numberToTerraform(struct!.initialDelaySec),
  }
}

export class GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceGroupManagerAutoHealingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._initialDelaySec !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySec = this._initialDelaySec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerAutoHealingPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheck = undefined;
      this._initialDelaySec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheck = value.healthCheck;
      this._initialDelaySec = value.initialDelaySec;
    }
  }

  // health_check - computed: false, optional: false, required: true
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // initial_delay_sec - computed: false, optional: false, required: true
  private _initialDelaySec?: number; 
  public get initialDelaySec() {
    return this.getNumberAttribute('initial_delay_sec');
  }
  public set initialDelaySec(value: number) {
    this._initialDelaySec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecInput() {
    return this._initialDelaySec;
  }
}
export interface GoogleComputeInstanceGroupManagerNamedPort {
  /**
  * The name of the port.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}
  */
  readonly name: string;
  /**
  * The port number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#port GoogleComputeInstanceGroupManager#port}
  */
  readonly port: number;
}

export function googleComputeInstanceGroupManagerNamedPortToTerraform(struct?: GoogleComputeInstanceGroupManagerNamedPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class GoogleComputeInstanceGroupManagerNamedPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceGroupManagerNamedPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerNamedPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
    }
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GoogleComputeInstanceGroupManagerNamedPortList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeInstanceGroupManagerNamedPort[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeInstanceGroupManagerNamedPortOutputReference {
    return new GoogleComputeInstanceGroupManagerNamedPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceGroupManagerStatefulDisk {
  /**
  * A value that prescribes what should happen to the stateful disk when the VM instance is deleted. The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}
  */
  readonly deleteRule?: string;
  /**
  * The device name of the disk to be attached.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#device_name GoogleComputeInstanceGroupManager#device_name}
  */
  readonly deviceName: string;
}

export function googleComputeInstanceGroupManagerStatefulDiskToTerraform(struct?: GoogleComputeInstanceGroupManagerStatefulDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_rule: cdktf.stringToTerraform(struct!.deleteRule),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
  }
}

export class GoogleComputeInstanceGroupManagerStatefulDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceGroupManagerStatefulDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRule = this._deleteRule;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerStatefulDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteRule = undefined;
      this._deviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteRule = value.deleteRule;
      this._deviceName = value.deviceName;
    }
  }

  // delete_rule - computed: false, optional: true, required: false
  private _deleteRule?: string; 
  public get deleteRule() {
    return this.getStringAttribute('delete_rule');
  }
  public set deleteRule(value: string) {
    this._deleteRule = value;
  }
  public resetDeleteRule() {
    this._deleteRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRuleInput() {
    return this._deleteRule;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }
}

export class GoogleComputeInstanceGroupManagerStatefulDiskList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeInstanceGroupManagerStatefulDisk[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeInstanceGroupManagerStatefulDiskOutputReference {
    return new GoogleComputeInstanceGroupManagerStatefulDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceGroupManagerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#create GoogleComputeInstanceGroupManager#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#delete GoogleComputeInstanceGroupManager#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#update GoogleComputeInstanceGroupManager#update}
  */
  readonly update?: string;
}

export function googleComputeInstanceGroupManagerTimeoutsToTerraform(struct?: GoogleComputeInstanceGroupManagerTimeoutsOutputReference | GoogleComputeInstanceGroupManagerTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeInstanceGroupManagerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceGroupManagerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeInstanceGroupManagerTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleComputeInstanceGroupManagerUpdatePolicy {
  /**
  * The maximum number of instances that can be created above the specified targetSize during the update process. Conflicts with max_surge_percent. If neither is set, defaults to 1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#max_surge_fixed GoogleComputeInstanceGroupManager#max_surge_fixed}
  */
  readonly maxSurgeFixed?: number;
  /**
  * The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. Conflicts with max_surge_fixed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#max_surge_percent GoogleComputeInstanceGroupManager#max_surge_percent}
  */
  readonly maxSurgePercent?: number;
  /**
  * The maximum number of instances that can be unavailable during the update process. Conflicts with max_unavailable_percent. If neither is set, defaults to 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#max_unavailable_fixed GoogleComputeInstanceGroupManager#max_unavailable_fixed}
  */
  readonly maxUnavailableFixed?: number;
  /**
  * The maximum number of instances(calculated as percentage) that can be unavailable during the update process. Conflicts with max_unavailable_fixed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#max_unavailable_percent GoogleComputeInstanceGroupManager#max_unavailable_percent}
  */
  readonly maxUnavailablePercent?: number;
  /**
  * Minimum number of seconds to wait for after a newly created instance becomes available. This value must be from range [0, 3600].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#min_ready_sec GoogleComputeInstanceGroupManager#min_ready_sec}
  */
  readonly minReadySec?: number;
  /**
  * Minimal action to be taken on an instance. You can specify either REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#minimal_action GoogleComputeInstanceGroupManager#minimal_action}
  */
  readonly minimalAction: string;
  /**
  * Most disruptive action that is allowed to be taken on an instance. You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#most_disruptive_allowed_action GoogleComputeInstanceGroupManager#most_disruptive_allowed_action}
  */
  readonly mostDisruptiveAllowedAction?: string;
  /**
  * The instance replacement method for managed instance groups. Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#replacement_method GoogleComputeInstanceGroupManager#replacement_method}
  */
  readonly replacementMethod?: string;
  /**
  * The type of update process. You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#type GoogleComputeInstanceGroupManager#type}
  */
  readonly type: string;
}

export function googleComputeInstanceGroupManagerUpdatePolicyToTerraform(struct?: GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference | GoogleComputeInstanceGroupManagerUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge_fixed: cdktf.numberToTerraform(struct!.maxSurgeFixed),
    max_surge_percent: cdktf.numberToTerraform(struct!.maxSurgePercent),
    max_unavailable_fixed: cdktf.numberToTerraform(struct!.maxUnavailableFixed),
    max_unavailable_percent: cdktf.numberToTerraform(struct!.maxUnavailablePercent),
    min_ready_sec: cdktf.numberToTerraform(struct!.minReadySec),
    minimal_action: cdktf.stringToTerraform(struct!.minimalAction),
    most_disruptive_allowed_action: cdktf.stringToTerraform(struct!.mostDisruptiveAllowedAction),
    replacement_method: cdktf.stringToTerraform(struct!.replacementMethod),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceGroupManagerUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurgeFixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurgeFixed = this._maxSurgeFixed;
    }
    if (this._maxSurgePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurgePercent = this._maxSurgePercent;
    }
    if (this._maxUnavailableFixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailableFixed = this._maxUnavailableFixed;
    }
    if (this._maxUnavailablePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailablePercent = this._maxUnavailablePercent;
    }
    if (this._minReadySec !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySec = this._minReadySec;
    }
    if (this._minimalAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalAction = this._minimalAction;
    }
    if (this._mostDisruptiveAllowedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostDisruptiveAllowedAction = this._mostDisruptiveAllowedAction;
    }
    if (this._replacementMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementMethod = this._replacementMethod;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurgeFixed = undefined;
      this._maxSurgePercent = undefined;
      this._maxUnavailableFixed = undefined;
      this._maxUnavailablePercent = undefined;
      this._minReadySec = undefined;
      this._minimalAction = undefined;
      this._mostDisruptiveAllowedAction = undefined;
      this._replacementMethod = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurgeFixed = value.maxSurgeFixed;
      this._maxSurgePercent = value.maxSurgePercent;
      this._maxUnavailableFixed = value.maxUnavailableFixed;
      this._maxUnavailablePercent = value.maxUnavailablePercent;
      this._minReadySec = value.minReadySec;
      this._minimalAction = value.minimalAction;
      this._mostDisruptiveAllowedAction = value.mostDisruptiveAllowedAction;
      this._replacementMethod = value.replacementMethod;
      this._type = value.type;
    }
  }

  // max_surge_fixed - computed: true, optional: true, required: false
  private _maxSurgeFixed?: number; 
  public get maxSurgeFixed() {
    return this.getNumberAttribute('max_surge_fixed');
  }
  public set maxSurgeFixed(value: number) {
    this._maxSurgeFixed = value;
  }
  public resetMaxSurgeFixed() {
    this._maxSurgeFixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeFixedInput() {
    return this._maxSurgeFixed;
  }

  // max_surge_percent - computed: false, optional: true, required: false
  private _maxSurgePercent?: number; 
  public get maxSurgePercent() {
    return this.getNumberAttribute('max_surge_percent');
  }
  public set maxSurgePercent(value: number) {
    this._maxSurgePercent = value;
  }
  public resetMaxSurgePercent() {
    this._maxSurgePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgePercentInput() {
    return this._maxSurgePercent;
  }

  // max_unavailable_fixed - computed: true, optional: true, required: false
  private _maxUnavailableFixed?: number; 
  public get maxUnavailableFixed() {
    return this.getNumberAttribute('max_unavailable_fixed');
  }
  public set maxUnavailableFixed(value: number) {
    this._maxUnavailableFixed = value;
  }
  public resetMaxUnavailableFixed() {
    this._maxUnavailableFixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableFixedInput() {
    return this._maxUnavailableFixed;
  }

  // max_unavailable_percent - computed: false, optional: true, required: false
  private _maxUnavailablePercent?: number; 
  public get maxUnavailablePercent() {
    return this.getNumberAttribute('max_unavailable_percent');
  }
  public set maxUnavailablePercent(value: number) {
    this._maxUnavailablePercent = value;
  }
  public resetMaxUnavailablePercent() {
    this._maxUnavailablePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailablePercentInput() {
    return this._maxUnavailablePercent;
  }

  // min_ready_sec - computed: false, optional: true, required: false
  private _minReadySec?: number; 
  public get minReadySec() {
    return this.getNumberAttribute('min_ready_sec');
  }
  public set minReadySec(value: number) {
    this._minReadySec = value;
  }
  public resetMinReadySec() {
    this._minReadySec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecInput() {
    return this._minReadySec;
  }

  // minimal_action - computed: false, optional: false, required: true
  private _minimalAction?: string; 
  public get minimalAction() {
    return this.getStringAttribute('minimal_action');
  }
  public set minimalAction(value: string) {
    this._minimalAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalActionInput() {
    return this._minimalAction;
  }

  // most_disruptive_allowed_action - computed: false, optional: true, required: false
  private _mostDisruptiveAllowedAction?: string; 
  public get mostDisruptiveAllowedAction() {
    return this.getStringAttribute('most_disruptive_allowed_action');
  }
  public set mostDisruptiveAllowedAction(value: string) {
    this._mostDisruptiveAllowedAction = value;
  }
  public resetMostDisruptiveAllowedAction() {
    this._mostDisruptiveAllowedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostDisruptiveAllowedActionInput() {
    return this._mostDisruptiveAllowedAction;
  }

  // replacement_method - computed: false, optional: true, required: false
  private _replacementMethod?: string; 
  public get replacementMethod() {
    return this.getStringAttribute('replacement_method');
  }
  public set replacementMethod(value: string) {
    this._replacementMethod = value;
  }
  public resetReplacementMethod() {
    this._replacementMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementMethodInput() {
    return this._replacementMethod;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleComputeInstanceGroupManagerVersionTargetSize {
  /**
  * The number of instances which are managed for this version. Conflicts with percent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#fixed GoogleComputeInstanceGroupManager#fixed}
  */
  readonly fixed?: number;
  /**
  * The number of instances (calculated as percentage) which are managed for this version. Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#percent GoogleComputeInstanceGroupManager#percent}
  */
  readonly percent?: number;
}

export function googleComputeInstanceGroupManagerVersionTargetSizeToTerraform(struct?: GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference | GoogleComputeInstanceGroupManagerVersionTargetSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}

export class GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceGroupManagerVersionTargetSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerVersionTargetSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixed = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixed = value.fixed;
      this._percent = value.percent;
    }
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed?: number; 
  public get fixed() {
    return this.getNumberAttribute('fixed');
  }
  public set fixed(value: number) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface GoogleComputeInstanceGroupManagerVersion {
  /**
  * The full URL to an instance template from which all new instances of this version will be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#instance_template GoogleComputeInstanceGroupManager#instance_template}
  */
  readonly instanceTemplate: string;
  /**
  * Version name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}
  */
  readonly name?: string;
  /**
  * target_size block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}
  */
  readonly targetSize?: GoogleComputeInstanceGroupManagerVersionTargetSize;
}

export function googleComputeInstanceGroupManagerVersionToTerraform(struct?: GoogleComputeInstanceGroupManagerVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_template: cdktf.stringToTerraform(struct!.instanceTemplate),
    name: cdktf.stringToTerraform(struct!.name),
    target_size: googleComputeInstanceGroupManagerVersionTargetSizeToTerraform(struct!.targetSize),
  }
}

export class GoogleComputeInstanceGroupManagerVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceGroupManagerVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTemplate = this._instanceTemplate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSize = this._targetSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceGroupManagerVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceTemplate = undefined;
      this._name = undefined;
      this._targetSize.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceTemplate = value.instanceTemplate;
      this._name = value.name;
      this._targetSize.internalValue = value.targetSize;
    }
  }

  // instance_template - computed: false, optional: false, required: true
  private _instanceTemplate?: string; 
  public get instanceTemplate() {
    return this.getStringAttribute('instance_template');
  }
  public set instanceTemplate(value: string) {
    this._instanceTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTemplateInput() {
    return this._instanceTemplate;
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

  // target_size - computed: false, optional: true, required: false
  private _targetSize = new GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference(this, "target_size");
  public get targetSize() {
    return this._targetSize;
  }
  public putTargetSize(value: GoogleComputeInstanceGroupManagerVersionTargetSize) {
    this._targetSize.internalValue = value;
  }
  public resetTargetSize() {
    this._targetSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSizeInput() {
    return this._targetSize.internalValue;
  }
}

export class GoogleComputeInstanceGroupManagerVersionList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeInstanceGroupManagerVersion[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeInstanceGroupManagerVersionOutputReference {
    return new GoogleComputeInstanceGroupManagerVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager google_compute_instance_group_manager}
*/
export class GoogleComputeInstanceGroupManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_instance_group_manager";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_instance_group_manager google_compute_instance_group_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeInstanceGroupManagerConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeInstanceGroupManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_group_manager',
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
    this._baseInstanceName = config.baseInstanceName;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._targetPools = config.targetPools;
    this._targetSize = config.targetSize;
    this._waitForInstances = config.waitForInstances;
    this._waitForInstancesStatus = config.waitForInstancesStatus;
    this._zone = config.zone;
    this._allInstancesConfig.internalValue = config.allInstancesConfig;
    this._autoHealingPolicies.internalValue = config.autoHealingPolicies;
    this._namedPort.internalValue = config.namedPort;
    this._statefulDisk.internalValue = config.statefulDisk;
    this._timeouts.internalValue = config.timeouts;
    this._updatePolicy.internalValue = config.updatePolicy;
    this._version.internalValue = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_instance_name - computed: false, optional: false, required: true
  private _baseInstanceName?: string; 
  public get baseInstanceName() {
    return this.getStringAttribute('base_instance_name');
  }
  public set baseInstanceName(value: string) {
    this._baseInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInstanceNameInput() {
    return this._baseInstanceName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // instance_group - computed: true, optional: false, required: false
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
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

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleComputeInstanceGroupManagerStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // target_pools - computed: false, optional: true, required: false
  private _targetPools?: string[]; 
  public get targetPools() {
    return cdktf.Fn.tolist(this.getListAttribute('target_pools'));
  }
  public set targetPools(value: string[]) {
    this._targetPools = value;
  }
  public resetTargetPools() {
    this._targetPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPoolsInput() {
    return this._targetPools;
  }

  // target_size - computed: true, optional: true, required: false
  private _targetSize?: number; 
  public get targetSize() {
    return this.getNumberAttribute('target_size');
  }
  public set targetSize(value: number) {
    this._targetSize = value;
  }
  public resetTargetSize() {
    this._targetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSizeInput() {
    return this._targetSize;
  }

  // wait_for_instances - computed: false, optional: true, required: false
  private _waitForInstances?: boolean | cdktf.IResolvable; 
  public get waitForInstances() {
    return this.getBooleanAttribute('wait_for_instances');
  }
  public set waitForInstances(value: boolean | cdktf.IResolvable) {
    this._waitForInstances = value;
  }
  public resetWaitForInstances() {
    this._waitForInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInstancesInput() {
    return this._waitForInstances;
  }

  // wait_for_instances_status - computed: false, optional: true, required: false
  private _waitForInstancesStatus?: string; 
  public get waitForInstancesStatus() {
    return this.getStringAttribute('wait_for_instances_status');
  }
  public set waitForInstancesStatus(value: string) {
    this._waitForInstancesStatus = value;
  }
  public resetWaitForInstancesStatus() {
    this._waitForInstancesStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInstancesStatusInput() {
    return this._waitForInstancesStatus;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // all_instances_config - computed: false, optional: true, required: false
  private _allInstancesConfig = new GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference(this, "all_instances_config");
  public get allInstancesConfig() {
    return this._allInstancesConfig;
  }
  public putAllInstancesConfig(value: GoogleComputeInstanceGroupManagerAllInstancesConfig) {
    this._allInstancesConfig.internalValue = value;
  }
  public resetAllInstancesConfig() {
    this._allInstancesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInstancesConfigInput() {
    return this._allInstancesConfig.internalValue;
  }

  // auto_healing_policies - computed: false, optional: true, required: false
  private _autoHealingPolicies = new GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference(this, "auto_healing_policies");
  public get autoHealingPolicies() {
    return this._autoHealingPolicies;
  }
  public putAutoHealingPolicies(value: GoogleComputeInstanceGroupManagerAutoHealingPolicies) {
    this._autoHealingPolicies.internalValue = value;
  }
  public resetAutoHealingPolicies() {
    this._autoHealingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingPoliciesInput() {
    return this._autoHealingPolicies.internalValue;
  }

  // named_port - computed: false, optional: true, required: false
  private _namedPort = new GoogleComputeInstanceGroupManagerNamedPortList(this, "named_port", true);
  public get namedPort() {
    return this._namedPort;
  }
  public putNamedPort(value: GoogleComputeInstanceGroupManagerNamedPort[] | cdktf.IResolvable) {
    this._namedPort.internalValue = value;
  }
  public resetNamedPort() {
    this._namedPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedPortInput() {
    return this._namedPort.internalValue;
  }

  // stateful_disk - computed: false, optional: true, required: false
  private _statefulDisk = new GoogleComputeInstanceGroupManagerStatefulDiskList(this, "stateful_disk", true);
  public get statefulDisk() {
    return this._statefulDisk;
  }
  public putStatefulDisk(value: GoogleComputeInstanceGroupManagerStatefulDisk[] | cdktf.IResolvable) {
    this._statefulDisk.internalValue = value;
  }
  public resetStatefulDisk() {
    this._statefulDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulDiskInput() {
    return this._statefulDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeInstanceGroupManagerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeInstanceGroupManagerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: GoogleComputeInstanceGroupManagerUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version = new GoogleComputeInstanceGroupManagerVersionList(this, "version", false);
  public get version() {
    return this._version;
  }
  public putVersion(value: GoogleComputeInstanceGroupManagerVersion[] | cdktf.IResolvable) {
    this._version.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_instance_name: cdktf.stringToTerraform(this._baseInstanceName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      target_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetPools),
      target_size: cdktf.numberToTerraform(this._targetSize),
      wait_for_instances: cdktf.booleanToTerraform(this._waitForInstances),
      wait_for_instances_status: cdktf.stringToTerraform(this._waitForInstancesStatus),
      zone: cdktf.stringToTerraform(this._zone),
      all_instances_config: googleComputeInstanceGroupManagerAllInstancesConfigToTerraform(this._allInstancesConfig.internalValue),
      auto_healing_policies: googleComputeInstanceGroupManagerAutoHealingPoliciesToTerraform(this._autoHealingPolicies.internalValue),
      named_port: cdktf.listMapper(googleComputeInstanceGroupManagerNamedPortToTerraform, true)(this._namedPort.internalValue),
      stateful_disk: cdktf.listMapper(googleComputeInstanceGroupManagerStatefulDiskToTerraform, true)(this._statefulDisk.internalValue),
      timeouts: googleComputeInstanceGroupManagerTimeoutsToTerraform(this._timeouts.internalValue),
      update_policy: googleComputeInstanceGroupManagerUpdatePolicyToTerraform(this._updatePolicy.internalValue),
      version: cdktf.listMapper(googleComputeInstanceGroupManagerVersionToTerraform, true)(this._version.internalValue),
    };
  }
}
