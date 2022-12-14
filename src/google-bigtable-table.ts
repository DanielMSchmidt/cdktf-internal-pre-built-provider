// https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigtableTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#id GoogleBigtableTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Bigtable instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#instance_name GoogleBigtableTable#instance_name}
  */
  readonly instanceName: string;
  /**
  * The name of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#name GoogleBigtableTable#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#project GoogleBigtableTable#project}
  */
  readonly project?: string;
  /**
  * A list of predefined keys to split the table on. !> Warning: Modifying the split_keys of an existing table will cause Terraform to delete/recreate the entire google_bigtable_table resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#split_keys GoogleBigtableTable#split_keys}
  */
  readonly splitKeys?: string[];
  /**
  * column_family block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#column_family GoogleBigtableTable#column_family}
  */
  readonly columnFamily?: GoogleBigtableTableColumnFamily[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#timeouts GoogleBigtableTable#timeouts}
  */
  readonly timeouts?: GoogleBigtableTableTimeouts;
}
export interface GoogleBigtableTableColumnFamily {
  /**
  * The name of the column family.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#family GoogleBigtableTable#family}
  */
  readonly family: string;
}

export function googleBigtableTableColumnFamilyToTerraform(struct?: GoogleBigtableTableColumnFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
  }
}

export class GoogleBigtableTableColumnFamilyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBigtableTableColumnFamily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigtableTableColumnFamily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
    }
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }
}

export class GoogleBigtableTableColumnFamilyList extends cdktf.ComplexList {
  public internalValue? : GoogleBigtableTableColumnFamily[] | cdktf.IResolvable

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
  public get(index: number): GoogleBigtableTableColumnFamilyOutputReference {
    return new GoogleBigtableTableColumnFamilyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBigtableTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table#create GoogleBigtableTable#create}
  */
  readonly create?: string;
}

export function googleBigtableTableTimeoutsToTerraform(struct?: GoogleBigtableTableTimeoutsOutputReference | GoogleBigtableTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class GoogleBigtableTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigtableTableTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigtableTableTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table google_bigtable_table}
*/
export class GoogleBigtableTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigtable_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigtable_table google_bigtable_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigtableTableConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBigtableTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_table',
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
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._name = config.name;
    this._project = config.project;
    this._splitKeys = config.splitKeys;
    this._columnFamily.internalValue = config.columnFamily;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
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

  // split_keys - computed: false, optional: true, required: false
  private _splitKeys?: string[]; 
  public get splitKeys() {
    return this.getListAttribute('split_keys');
  }
  public set splitKeys(value: string[]) {
    this._splitKeys = value;
  }
  public resetSplitKeys() {
    this._splitKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitKeysInput() {
    return this._splitKeys;
  }

  // column_family - computed: false, optional: true, required: false
  private _columnFamily = new GoogleBigtableTableColumnFamilyList(this, "column_family", true);
  public get columnFamily() {
    return this._columnFamily;
  }
  public putColumnFamily(value: GoogleBigtableTableColumnFamily[] | cdktf.IResolvable) {
    this._columnFamily.internalValue = value;
  }
  public resetColumnFamily() {
    this._columnFamily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnFamilyInput() {
    return this._columnFamily.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBigtableTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBigtableTableTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      split_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._splitKeys),
      column_family: cdktf.listMapper(googleBigtableTableColumnFamilyToTerraform, true)(this._columnFamily.internalValue),
      timeouts: googleBigtableTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
