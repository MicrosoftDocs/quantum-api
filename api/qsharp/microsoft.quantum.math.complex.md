---
uid: Microsoft.Quantum.Math.Complex
title: Complex user defined type
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: Complex
qsharp.summary: >-
  Represents a complex number by its real and imaginary components.
  The first element of the tuple is the real component, the second one - the imaginary component.
---

# Complex user defined type

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