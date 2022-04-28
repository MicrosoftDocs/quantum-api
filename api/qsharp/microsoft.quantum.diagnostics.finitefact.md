---
uid: Microsoft.Quantum.Diagnostics.FiniteFact
title: FiniteFact function
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: FiniteFact
qsharp.summary: >-
  Checks whether a given floating-point value represents a finite
  number, and throws an exception if this is not the case.
---

# FiniteFact function

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Checks whether a given floating-point value represents a finitenumber, and throws an exception if this is not the case.

```qsharp
function FiniteFact (d : Double, message : String) : Unit
```


## Input

### d : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The floating-point value that is to be checked.


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

Failure message to be used as an error message if `d` is eithernot finite, or not a number.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Example

The following Q# code will throw an exception:```qsharpFiniteFact(NaN(), "NaN is not a finite number.");```

## See Also

- [Microsoft.Quantum.Diagnostics.Fact](xref:Microsoft.Quantum.Diagnostics.Fact)