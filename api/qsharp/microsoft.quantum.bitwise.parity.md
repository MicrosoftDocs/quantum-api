---
uid: Microsoft.Quantum.Bitwise.Parity
title: Parity function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Bitwise
qsharp.name: Parity
qsharp.summary: Returns the bitwise PARITY of an integer.
---

# Parity function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Bitwise](xref:Microsoft.Quantum.Bitwise)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns the bitwise PARITY of an integer.

```qsharp
function Parity (a : Int) : Int
```


## Description

This function returns the bitwise parity of the[two's complement](https://en.wikipedia.org/wiki/Signed_number_representations#Two's_complement)representation of its input, returning `1` if that representationcontains an odd number of ones, and returning `0` otherwise.

## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)





## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)



## Example

```qsharplet a = 248;let x = Parity(a); // x : Int = 1.```