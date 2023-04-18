




## Step 3: (Optional) Create a new VPC
The Qrvey platform can be deployed into your existing VPC and subnets, and it supports different combinations of Public and Private subnets. To keep things simple, we recommend using the Default VPC or create a new VPC using the wizard. Follow these steps to create a new VPC in your AWS account: 
1. Log in to the AWS console. Verify that your user account has sufficient permissions to create a VPC and related resources.
2. Select the region from the dropdown (top right of console) where Qrvey platform will be deployed.
3. Navigate to the AWS VPC Service Console. 

  ![Step3.3](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.3-VPC-console.png)

4. Click **Create VPC** to launch the Create VPC wizard.

  ![Step3.4](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.4-VPC-Wizard.png)

5. Select the following options:
    - **Resources to create**: select **VPC and More**.
    - **Name tag auto-generation**: Enter any name for your reference.
    - **IPv4 CIDR block**: Select a unique CIDR block. Make sure the CIDR block would not overlap with any other VPC, in case you plan to set up VPC Peering for database connection. Minimum CIDR range required is **/26**.
    - **Number of Availability Zones (AZs)**: Select 2 or more.
    - **Customize AZs**: You can change the AZs or leave them as default.
    - **Number of public subnets**: Select the value that matches the number of AZs.
    - **Number of private subnets**: Select at least 2 if you plan to use private subnets to connect to your database (using VPC Peering or similar).
    - **Customize subnets CIDR block**: Change the settings or leave them as default.
    - **NAT gateways ($)**: If you have private subnets, select at least one AZ (for production environments, we recommend one per AZ for high availability).
    - You can leave the rest as default. Verify the settings and click **Create VPC**.

    ![Step3.5](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.5-VPC-Settings.png)

6. Wait for the VPC to be created.

![Step3.6](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.6-VPC-Created.png)

7. Navigate to the **Subnets** tab in the VPC console and filter the list by the VPC.

8. For each subnet in the list, update the **Auto-assign public IPv4 address** flag to **True**.
    - Select a subnet, click the **Actions** dropdown, and select **Edit Subnet settings**.

    ![Step3.8.a](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.8.a-VPC-Subnet-action.png)

    - Select **Enable auto-assign public IPv4 address**, and then click **Save**.

    ![Step3.8.b](https://s3.amazonaws.com/cdn.qrvey.com/documentation_assets/get-started/preparing-aws/Step3.8.b-VPC-Subnet-IPv4.png)







## Step 4: Send Info to Qrvey




## Step 5: Move SES out of Sandbox (Offline)
