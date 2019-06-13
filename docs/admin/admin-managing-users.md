## Qrvey Admin App - User Management

Qrvey Platform’s Admin app is used to manage and monitor other products in Qrvey platform. Admin app allows System Administrator to



*   Manage Creator accounts
*   Customize the Analytics application
*   Monitor DataRouter Resources
*   Customize and Manage DataRouter configuration
*   Share Qrvey Apps between different servers or installations


## Create a new Admin User

Admin App uses AWS IAM for user accounts instead of managing its own users. To provide access to Admin app, you’ll have to create a new User under AWS IAM service. Here are the steps


### Step 1: Login to [AWS Console](https://aws.amazon.com/) 

Use an account that has permissions to create new IAM users


### Step 2: Navigate to [AWS IAM](https://console.aws.amazon.com/iam/home?#/home) service page and click on Users sub menu option on the left menu


### Step 3: Create a new IAM user

Enter a username and make sure the “Programmatic Access” checkbox is selected


### Step 4: Assign new user to Qrvey Admin user group

Click on Next button to set permissions. On the permissions tab make sure the group called “qrvey-admin-dev” is selected


### Step 5: Download the AccessKeys

Make a note of username and Access Key ID for this user as these values will be used to Login into Admin App


### Step 6: Navigate to Admin App and use the username and Access Key ID to login