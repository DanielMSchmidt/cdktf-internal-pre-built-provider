// https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleApiGatewayApiConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API to attach the config to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#api GoogleApiGatewayApiConfigA#api}
  */
  readonly api: string;
  /**
  * Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#api_config_id GoogleApiGatewayApiConfigA#api_config_id}
  */
  readonly apiConfigId?: string;
  /**
  * Creates a unique name beginning with the specified prefix. If this and api_config_id are unspecified, a random value is chosen for the name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#api_config_id_prefix GoogleApiGatewayApiConfigA#api_config_id_prefix}
  */
  readonly apiConfigIdPrefix?: string;
  /**
  * A user-visible name for the API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#display_name GoogleApiGatewayApiConfigA#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user-provided metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#labels GoogleApiGatewayApiConfigA#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}
  */
  readonly project?: string;
  /**
  * gateway_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#gateway_config GoogleApiGatewayApiConfigA#gateway_config}
  */
  readonly gatewayConfig?: GoogleApiGatewayApiConfigGatewayConfig;
  /**
  * grpc_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#grpc_services GoogleApiGatewayApiConfigA#grpc_services}
  */
  readonly grpcServices?: GoogleApiGatewayApiConfigGrpcServices[] | cdktf.IResolvable;
  /**
  * managed_service_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#managed_service_configs GoogleApiGatewayApiConfigA#managed_service_configs}
  */
  readonly managedServiceConfigs?: GoogleApiGatewayApiConfigManagedServiceConfigs[] | cdktf.IResolvable;
  /**
  * openapi_documents block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#openapi_documents GoogleApiGatewayApiConfigA#openapi_documents}
  */
  readonly openapiDocuments?: GoogleApiGatewayApiConfigOpenapiDocuments[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#timeouts GoogleApiGatewayApiConfigA#timeouts}
  */
  readonly timeouts?: GoogleApiGatewayApiConfigTimeouts;
}
export interface GoogleApiGatewayApiConfigGatewayConfigBackendConfig {
  /**
  * Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured
(https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#google_service_account GoogleApiGatewayApiConfigA#google_service_account}
  */
  readonly googleServiceAccount: string;
}

export function googleApiGatewayApiConfigGatewayConfigBackendConfigToTerraform(struct?: GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference | GoogleApiGatewayApiConfigGatewayConfigBackendConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_service_account: cdktf.stringToTerraform(struct!.googleServiceAccount),
  }
}

export class GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApiGatewayApiConfigGatewayConfigBackendConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigGatewayConfigBackendConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._googleServiceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._googleServiceAccount = value.googleServiceAccount;
    }
  }

  // google_service_account - computed: false, optional: false, required: true
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
  }
}
export interface GoogleApiGatewayApiConfigGatewayConfig {
  /**
  * backend_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#backend_config GoogleApiGatewayApiConfigA#backend_config}
  */
  readonly backendConfig: GoogleApiGatewayApiConfigGatewayConfigBackendConfig;
}

export function googleApiGatewayApiConfigGatewayConfigToTerraform(struct?: GoogleApiGatewayApiConfigGatewayConfigOutputReference | GoogleApiGatewayApiConfigGatewayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_config: googleApiGatewayApiConfigGatewayConfigBackendConfigToTerraform(struct!.backendConfig),
  }
}

export class GoogleApiGatewayApiConfigGatewayConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApiGatewayApiConfigGatewayConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendConfig = this._backendConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigGatewayConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendConfig.internalValue = value.backendConfig;
    }
  }

  // backend_config - computed: false, optional: false, required: true
  private _backendConfig = new GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference(this, "backend_config");
  public get backendConfig() {
    return this._backendConfig;
  }
  public putBackendConfig(value: GoogleApiGatewayApiConfigGatewayConfigBackendConfig) {
    this._backendConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendConfigInput() {
    return this._backendConfig.internalValue;
  }
}
export interface GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet {
  /**
  * Base64 encoded content of the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}
  */
  readonly contents: string;
  /**
  * The file path (full or relative path). This is typically the path of the file when it is uploaded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}
  */
  readonly path: string;
}

export function googleApiGatewayApiConfigGrpcServicesFileDescriptorSetToTerraform(struct?: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference | GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contents = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contents = value.contents;
      this._path = value.path;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface GoogleApiGatewayApiConfigGrpcServicesSource {
  /**
  * Base64 encoded content of the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}
  */
  readonly contents: string;
  /**
  * The file path (full or relative path). This is typically the path of the file when it is uploaded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}
  */
  readonly path: string;
}

export function googleApiGatewayApiConfigGrpcServicesSourceToTerraform(struct?: GoogleApiGatewayApiConfigGrpcServicesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApiGatewayApiConfigGrpcServicesSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigGrpcServicesSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents = value.contents;
      this._path = value.path;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GoogleApiGatewayApiConfigGrpcServicesSourceList extends cdktf.ComplexList {
  public internalValue? : GoogleApiGatewayApiConfigGrpcServicesSource[] | cdktf.IResolvable

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
  public get(index: number): GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference {
    return new GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApiGatewayApiConfigGrpcServices {
  /**
  * file_descriptor_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#file_descriptor_set GoogleApiGatewayApiConfigA#file_descriptor_set}
  */
  readonly fileDescriptorSet: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet;
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#source GoogleApiGatewayApiConfigA#source}
  */
  readonly source?: GoogleApiGatewayApiConfigGrpcServicesSource[] | cdktf.IResolvable;
}

export function googleApiGatewayApiConfigGrpcServicesToTerraform(struct?: GoogleApiGatewayApiConfigGrpcServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_descriptor_set: googleApiGatewayApiConfigGrpcServicesFileDescriptorSetToTerraform(struct!.fileDescriptorSet),
    source: cdktf.listMapper(googleApiGatewayApiConfigGrpcServicesSourceToTerraform, true)(struct!.source),
  }
}

export class GoogleApiGatewayApiConfigGrpcServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApiGatewayApiConfigGrpcServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileDescriptorSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileDescriptorSet = this._fileDescriptorSet?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigGrpcServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileDescriptorSet.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileDescriptorSet.internalValue = value.fileDescriptorSet;
      this._source.internalValue = value.source;
    }
  }

  // file_descriptor_set - computed: false, optional: false, required: true
  private _fileDescriptorSet = new GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference(this, "file_descriptor_set");
  public get fileDescriptorSet() {
    return this._fileDescriptorSet;
  }
  public putFileDescriptorSet(value: GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet) {
    this._fileDescriptorSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDescriptorSetInput() {
    return this._fileDescriptorSet.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new GoogleApiGatewayApiConfigGrpcServicesSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleApiGatewayApiConfigGrpcServicesSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class GoogleApiGatewayApiConfigGrpcServicesList extends cdktf.ComplexList {
  public internalValue? : GoogleApiGatewayApiConfigGrpcServices[] | cdktf.IResolvable

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
  public get(index: number): GoogleApiGatewayApiConfigGrpcServicesOutputReference {
    return new GoogleApiGatewayApiConfigGrpcServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApiGatewayApiConfigManagedServiceConfigs {
  /**
  * Base64 encoded content of the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}
  */
  readonly contents: string;
  /**
  * The file path (full or relative path). This is typically the path of the file when it is uploaded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}
  */
  readonly path: string;
}

export function googleApiGatewayApiConfigManagedServiceConfigsToTerraform(struct?: GoogleApiGatewayApiConfigManagedServiceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApiGatewayApiConfigManagedServiceConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigManagedServiceConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents = value.contents;
      this._path = value.path;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GoogleApiGatewayApiConfigManagedServiceConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleApiGatewayApiConfigManagedServiceConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference {
    return new GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApiGatewayApiConfigOpenapiDocumentsDocument {
  /**
  * Base64 encoded content of the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}
  */
  readonly contents: string;
  /**
  * The file path (full or relative path). This is typically the path of the file when it is uploaded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}
  */
  readonly path: string;
}

export function googleApiGatewayApiConfigOpenapiDocumentsDocumentToTerraform(struct?: GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference | GoogleApiGatewayApiConfigOpenapiDocumentsDocument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.stringToTerraform(struct!.contents),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApiGatewayApiConfigOpenapiDocumentsDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigOpenapiDocumentsDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contents = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contents = value.contents;
      this._path = value.path;
    }
  }

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface GoogleApiGatewayApiConfigOpenapiDocuments {
  /**
  * document block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#document GoogleApiGatewayApiConfigA#document}
  */
  readonly document: GoogleApiGatewayApiConfigOpenapiDocumentsDocument;
}

export function googleApiGatewayApiConfigOpenapiDocumentsToTerraform(struct?: GoogleApiGatewayApiConfigOpenapiDocuments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    document: googleApiGatewayApiConfigOpenapiDocumentsDocumentToTerraform(struct!.document),
  }
}

export class GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApiGatewayApiConfigOpenapiDocuments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._document?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.document = this._document?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApiGatewayApiConfigOpenapiDocuments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._document.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._document.internalValue = value.document;
    }
  }

  // document - computed: false, optional: false, required: true
  private _document = new GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference(this, "document");
  public get document() {
    return this._document;
  }
  public putDocument(value: GoogleApiGatewayApiConfigOpenapiDocumentsDocument) {
    this._document.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document.internalValue;
  }
}

export class GoogleApiGatewayApiConfigOpenapiDocumentsList extends cdktf.ComplexList {
  public internalValue? : GoogleApiGatewayApiConfigOpenapiDocuments[] | cdktf.IResolvable

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
  public get(index: number): GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference {
    return new GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApiGatewayApiConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}
  */
  readonly update?: string;
}

export function googleApiGatewayApiConfigTimeoutsToTerraform(struct?: GoogleApiGatewayApiConfigTimeoutsOutputReference | GoogleApiGatewayApiConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleApiGatewayApiConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApiGatewayApiConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleApiGatewayApiConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config google_api_gateway_api_config}
*/
export class GoogleApiGatewayApiConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_api_gateway_api_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_api_gateway_api_config google_api_gateway_api_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleApiGatewayApiConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleApiGatewayApiConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_api_gateway_api_config',
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
    this._api = config.api;
    this._apiConfigId = config.apiConfigId;
    this._apiConfigIdPrefix = config.apiConfigIdPrefix;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._gatewayConfig.internalValue = config.gatewayConfig;
    this._grpcServices.internalValue = config.grpcServices;
    this._managedServiceConfigs.internalValue = config.managedServiceConfigs;
    this._openapiDocuments.internalValue = config.openapiDocuments;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: false, optional: false, required: true
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // api_config_id - computed: true, optional: true, required: false
  private _apiConfigId?: string; 
  public get apiConfigId() {
    return this.getStringAttribute('api_config_id');
  }
  public set apiConfigId(value: string) {
    this._apiConfigId = value;
  }
  public resetApiConfigId() {
    this._apiConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConfigIdInput() {
    return this._apiConfigId;
  }

  // api_config_id_prefix - computed: true, optional: true, required: false
  private _apiConfigIdPrefix?: string; 
  public get apiConfigIdPrefix() {
    return this.getStringAttribute('api_config_id_prefix');
  }
  public set apiConfigIdPrefix(value: string) {
    this._apiConfigIdPrefix = value;
  }
  public resetApiConfigIdPrefix() {
    this._apiConfigIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiConfigIdPrefixInput() {
    return this._apiConfigIdPrefix;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // service_config_id - computed: true, optional: false, required: false
  public get serviceConfigId() {
    return this.getStringAttribute('service_config_id');
  }

  // gateway_config - computed: false, optional: true, required: false
  private _gatewayConfig = new GoogleApiGatewayApiConfigGatewayConfigOutputReference(this, "gateway_config");
  public get gatewayConfig() {
    return this._gatewayConfig;
  }
  public putGatewayConfig(value: GoogleApiGatewayApiConfigGatewayConfig) {
    this._gatewayConfig.internalValue = value;
  }
  public resetGatewayConfig() {
    this._gatewayConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayConfigInput() {
    return this._gatewayConfig.internalValue;
  }

  // grpc_services - computed: false, optional: true, required: false
  private _grpcServices = new GoogleApiGatewayApiConfigGrpcServicesList(this, "grpc_services", false);
  public get grpcServices() {
    return this._grpcServices;
  }
  public putGrpcServices(value: GoogleApiGatewayApiConfigGrpcServices[] | cdktf.IResolvable) {
    this._grpcServices.internalValue = value;
  }
  public resetGrpcServices() {
    this._grpcServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServicesInput() {
    return this._grpcServices.internalValue;
  }

  // managed_service_configs - computed: false, optional: true, required: false
  private _managedServiceConfigs = new GoogleApiGatewayApiConfigManagedServiceConfigsList(this, "managed_service_configs", false);
  public get managedServiceConfigs() {
    return this._managedServiceConfigs;
  }
  public putManagedServiceConfigs(value: GoogleApiGatewayApiConfigManagedServiceConfigs[] | cdktf.IResolvable) {
    this._managedServiceConfigs.internalValue = value;
  }
  public resetManagedServiceConfigs() {
    this._managedServiceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedServiceConfigsInput() {
    return this._managedServiceConfigs.internalValue;
  }

  // openapi_documents - computed: false, optional: true, required: false
  private _openapiDocuments = new GoogleApiGatewayApiConfigOpenapiDocumentsList(this, "openapi_documents", false);
  public get openapiDocuments() {
    return this._openapiDocuments;
  }
  public putOpenapiDocuments(value: GoogleApiGatewayApiConfigOpenapiDocuments[] | cdktf.IResolvable) {
    this._openapiDocuments.internalValue = value;
  }
  public resetOpenapiDocuments() {
    this._openapiDocuments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openapiDocumentsInput() {
    return this._openapiDocuments.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleApiGatewayApiConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleApiGatewayApiConfigTimeouts) {
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
      api: cdktf.stringToTerraform(this._api),
      api_config_id: cdktf.stringToTerraform(this._apiConfigId),
      api_config_id_prefix: cdktf.stringToTerraform(this._apiConfigIdPrefix),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      gateway_config: googleApiGatewayApiConfigGatewayConfigToTerraform(this._gatewayConfig.internalValue),
      grpc_services: cdktf.listMapper(googleApiGatewayApiConfigGrpcServicesToTerraform, true)(this._grpcServices.internalValue),
      managed_service_configs: cdktf.listMapper(googleApiGatewayApiConfigManagedServiceConfigsToTerraform, true)(this._managedServiceConfigs.internalValue),
      openapi_documents: cdktf.listMapper(googleApiGatewayApiConfigOpenapiDocumentsToTerraform, true)(this._openapiDocuments.internalValue),
      timeouts: googleApiGatewayApiConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
