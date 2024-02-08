---
uid: Microsoft.Quantum.Math.PowL
title: PowL function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: PowL
qsharp.summary: Returns a number raised to a given power.
---

# PowL function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a number raised to a given power.

```qsharp
function PowL (a : BigInt, power : Int) : BigInt
```


## Input

### a : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The number $a$ that is to be raised.


### power : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The power $b$ to which $a$ should be raised.



## Output : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The power $a^b$