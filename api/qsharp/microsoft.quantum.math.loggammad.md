---
uid: Microsoft.Quantum.Math.LogGammaD
title: LogGammaD function
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: LogGammaD
qsharp.summary: >-
  Returns the natural logarithm of the gamma function (aka the log-gamma
  function).
---

# LogGammaD function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the natural logarithm of the gamma function (aka the log-gammafunction).

```qsharp
function LogGammaD (x : Double) : Double
```


## Description

The gamma function $\Gamma(x)$ generalizes the factorial functionto the positive real numbers and is defined as$$\begin{align}\Gamma(x) \mathrel{:=} \int_0^{\infty} t^{x - 1} e^{-t} dt.\end{align}$$The gamma function has the property that for all positive real numbers$x$, $\Gamma(x + 1) = x \Gamma(x)$, such that the factorial functionis a special case of $\Gamma$,$n! = \Gamma(n + 1)$ for all natural numbers $n$.

## Input

### x : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The point $x$ at which the log-gamma function is to be evaluated.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The value $\ln \Gamma(x)$.