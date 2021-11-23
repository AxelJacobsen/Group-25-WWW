# PROG2053 Project Parrt#1 Model Data

Since we don't have a backend database system to fetch model data from yet we stuff the model
data into the the PROG2053models class

* `PROG2053models.exampleModel()` - The model for the problem 1 - example view.
* `PROG2053models.statesModel()`  - The model for the problem 2 - states view.

These models can be accessed from the React controller of the view by importing the PROG2053models class.



And the calling its methods, for example:

    PROG2053models.statesModel()
    
will access the problem2 states array so:

    PROG2053models.statesModel()[0] === 'Alabama'
