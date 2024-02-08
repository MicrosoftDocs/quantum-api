---
uid: Microsoft.Quantum.Math.SignD
title: SignD function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: SignD
qsharp.summary: Returns an integer that indicates the sign of a number.
---

# SignD function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns an integer that indicates the sign of a number.

```qsharp
function SignD (a : Double) : Int
```


## Input

### a : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The number whose sign is to be returned.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The sign of `a` represented as an integer, as shown in the followingtable:|Return value  |Meaning                  ||--------------|-------------------------|| -1           |`a` is less than zero    || 0            |`a` is equal to zero     || +1           |`a` is greater than zero |

## See Also

- [Microsoft.Quantum.Math.SignI](xref:Microsoft.Quantum.Math.SignI)
- [Microsoft.Quantum.Math.SignL](xref:Microsoft.Quantum.Math.SignL)