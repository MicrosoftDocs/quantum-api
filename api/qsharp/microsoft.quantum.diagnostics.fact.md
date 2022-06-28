---
uid: Microsoft.Quantum.Diagnostics.Fact
title: Fact function
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: Fact
qsharp.summary: Checks whether a classical condition is true, and throws an exception if it is not.
---

# Fact function

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Checks whether a classical condition is true, and throws an exception if it is not.

```qsharp
function Fact (actual : Bool, message : String) : Unit
```


## Input

### actual : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

The condition to be checked.


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

Failure message string to be used as an error message if the classicalcondition is false.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Example

The following Q# snippet will throw an exception:```qsharpFact(false, "Expected true.");```

## See Also

- [Microsoft.Quantum.Diagnostics.Contradiction](xref:Microsoft.Quantum.Diagnostics.Contradiction)