---
uid: Microsoft.Quantum.Math.Fraction
title: Fraction user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: Fraction
qsharp.summary: >-
  Represents a rational number of the form `p/q`. Integer `p` is
  the first element of the tuple and `q` is the second element
  of the tuple.
---

# Fraction user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a rational number of the form `p/q`. Integer `p` isthe first element of the tuple and `q` is the second elementof the tuple.

```qsharp

newtype Fraction = (Numerator : Int, Denominator : Int);
```



## Named Items

### Numerator : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Numerator of the fraction.
### Denominator : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Denominator of the fraction/