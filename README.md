# API ENDPOINTS

# ****** USERS ******* ADMIN TOKEN NEEDED

# GET https://african-marketplace-tt72.herokuapp.com/users/all
# Lists all users 

# GET https://african-marketplace-tt72.herokuapp.com/users/user/{userid}
# finds user by id

# GET https://african-marketplace-tt72.herokuapp.com/users/user/name/{username}
# finds user by name

# GET https://african-marketplace-tt72.herokuapp.com/users/user/name/like/{username}
# lists users that contain username string

# POST https://african-marketplace-tt72.herokuapp.com/users/user
# adds a new user to the database

# PUT https://african-marketplace-tt72.herokuapp.com/users/user/{userid}
# updates entire user information in the database 

# PATCH https://african-marketplace-tt72.herokuapp.com/users/user/{id}
# updates one or more sections of a user's information within database

# DELETE https://african-marketplace-tt72.herokuapp.com/users/user/{id}
# deletes user by id 

# GET https://african-marketplace-tt72.herokuapp.com/users/getuserinfo
# returns the currently authenticated user (only needed for authentication process check)

# **** PRODUCTS *****

# GET https://african-marketplace-tt72.herokuapp.com/products/all
# lists all products in marketplace

# GET https://african-marketplace-tt72.herokuapp.com/products/product/{id}
# finds a product by id

# GET https://african-marketplace-tt72.herokuapp.com/products/product/name/like/{productname}
# lists products that contain the productname parameter string

# POST https://african-marketplace-tt72.herokuapp.com/products/product
# adds a new user to the database

# PUT https://african-marketplace-tt72.herokuapp.com/products/product/{productid}
# updates entire product information in the database 

# PATCH https://african-marketplace-tt72.herokuapp.com/products/product/{id}
# updates one or more sections of a products's information within database

# DELETE https://african-marketplace-tt72.herokuapp.com/products/product/{id}
# deletes product by id 


# ***** PRODUCT CATEOGORIES *******

# GET https://african-marketplace-tt72.herokuapp.com/category/all
# lists all categories and the products within in marketplace (for dashboard)


# ***** SIGNUP *******

# POST https://african-marketplace-tt72.herokuapp.com/signup
# Adds new user with role of seller

# ***** LOGOUT *******

# POST https://african-marketplace-tt72.herokuapp.com/logout
# Removes token and logs out user // probably easier to do this in frontend

