---
uid: Microsoft.Quantum.Math.Complex
title: Complex user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: Complex
qsharp.summary: >-
  Represents a complex number by its real and imaginary components.
  The first element of the tuple is the real component, the second one - the imaginary component.
---

# Complex user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Represents a complex number by its real and imaginary components.The first element of the tuple is the real component, the second one - the imaginary component.

```qsharp

newtype Complex = (Real : Double, Imag : Double);
```



## Named Items

### Real : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)


### Imag : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)



## Example

The following snippet defines the imaginary unit $0 + 1i$:```qsharplet imagUnit = Complex(0.0, 1.0);```